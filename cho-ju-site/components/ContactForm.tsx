'use client';

import { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    try {
      // Netlify Forms へ送信（application/x-www-form-urlencoded）。
      // form-name は __forms.html で定義した "contact" に一致させる。
      const body = new URLSearchParams();
      body.append('form-name', 'contact');
      body.append('name', form.name);
      body.append('email', form.email);
      body.append('message', form.message);
      body.append('bot-field', form.company); // ハニーポット

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', company: '' });
      } else {
        setStatus('error');
        setErrorMsg('送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch {
      setStatus('error');
      setErrorMsg('通信エラーが発生しました。接続環境をご確認のうえ、再度お試しください。');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-hai bg-kinari-deep p-10 sm:p-12 text-center">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-ai text-kinari rounded-full">
          <Check size={28} strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-2xl font-medium text-sumi mb-3">送信が完了しました</h2>
        <p className="text-sumi-soft leading-loose">
          お問い合わせいただき、ありがとうございます。
          <br />
          内容を確認のうえ、土日祝日を除く2〜3営業日以内にご返信いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-flex items-center text-sm text-ai hover:text-ai-deep transition-colors"
        >
          続けてお問い合わせする
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-kinari border border-hai px-4 py-3 text-sumi placeholder:text-sumi-soft/50 ' +
    'focus:outline-none focus:border-ai transition-colors';

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="border border-hai bg-kinari-deep p-8 sm:p-10 space-y-7"
    >
      {/* Netlify Forms 用の hidden フィールド */}
      <input type="hidden" name="form-name" value="contact" />

      {/* ハニーポット（人間には非表示。ボット対策） */}
      <div className="hidden" aria-hidden="true">
        <label>
          会社名
          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={update('company')}
          />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-sumi mb-2">
          お名前 <span className="text-shu">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          maxLength={100}
          value={form.name}
          onChange={update('name')}
          placeholder="山田 太郎"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-sumi mb-2">
          メールアドレス <span className="text-shu">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          maxLength={254}
          value={form.email}
          onChange={update('email')}
          placeholder="example@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-sumi mb-2">
          お問い合わせ内容 <span className="text-shu">*</span>
        </label>
        <textarea
          id="message"
          required
          minLength={5}
          maxLength={5000}
          rows={6}
          value={form.message}
          onChange={update('message')}
          placeholder="製品に関するご質問やご要望など、お気軽にご記入ください。"
          className={`${inputClass} resize-y leading-relaxed`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-shu border-l-2 border-shu pl-3 leading-relaxed">{errorMsg}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-center px-9 py-4 bg-ai text-kinari text-base font-medium hover:bg-ai-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              送信中 <Loader2 size={18} className="ml-2 animate-spin" />
            </>
          ) : (
            <>
              送信する <Send size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="mt-4 text-xs text-sumi-soft leading-relaxed">
          ※ ご入力いただいた個人情報は、お問い合わせ対応の目的にのみ利用します。
        </p>
      </div>
    </form>
  );
}
