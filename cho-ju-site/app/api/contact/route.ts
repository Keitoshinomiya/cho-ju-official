import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// 簡易レート制限（同一IPからの連投を抑止。サーバ稼働中のみ有効なメモリ実装）
const WINDOW_MS = 60_000; // 1分
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: '送信回数が多すぎます。しばらく時間をおいてからお試しください。' },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'リクエストが不正です。' }, { status: 400 });
    }

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const message = String(body.message ?? '').trim();
    // ハニーポット（ボット対策。人間には見えない欄が埋まっていたら破棄）
    const honeypot = String(body.company ?? '').trim();

    if (honeypot) {
      // ボットには成功を装って静かに破棄
      return NextResponse.json({ ok: true });
    }

    // バリデーション
    const errors: string[] = [];
    if (!name || name.length > 100) errors.push('お名前を正しくご入力ください。');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
      errors.push('メールアドレスを正しくご入力ください。');
    if (!message || message.length < 5 || message.length > 5000)
      errors.push('お問い合わせ内容をご入力ください（5文字以上）。');

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(' ') }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@yashi-nomi.com';
    // 送信元：独自ドメインをResendで認証済みならそのアドレス、未認証なら resend のテスト用
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'CHO-JU お問い合わせ <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY が未設定です。');
      return NextResponse.json(
        { error: 'サーバー側の設定が未完了です。お手数ですが info@yashi-nomi.com まで直接ご連絡ください。' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: sans-serif; line-height: 1.7; color: #1c1a17;">
        <h2 style="font-size: 16px; border-bottom: 2px solid #b8432e; padding-bottom: 8px;">CHO-JU サイト お問い合わせ</h2>
        <p><strong>お名前：</strong>${escapeHtml(name)}</p>
        <p><strong>メールアドレス：</strong>${escapeHtml(email)}</p>
        <p><strong>お問い合わせ内容：</strong></p>
        <div style="white-space: pre-wrap; background: #f7f3ec; padding: 16px; border: 1px solid #d8d0c2;">${escapeHtml(message)}</div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `【CHO-JU お問い合わせ】${name} 様`,
      html,
    });

    if (error) {
      console.error('[contact] Resend エラー:', error);
      return NextResponse.json(
        { error: '送信に失敗しました。お手数ですが時間をおいて再度お試しください。' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[contact] 予期しないエラー:', e);
    return NextResponse.json(
      { error: '送信に失敗しました。お手数ですが時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}
