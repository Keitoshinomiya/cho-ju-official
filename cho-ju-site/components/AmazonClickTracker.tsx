'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

/**
 * Amazonへの送客クリックを GA4 に記録するグローバルリスナー。
 * どのページ・どのリンクから Amazon に流れたかを "amazon_click" イベントで計測し、
 * 記事ごとの送客効果を測れるようにする。
 */
export default function AmazonClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href*="amazon.co.jp"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      sendGAEvent('event', 'amazon_click', {
        link_url: anchor.href,
        page_path: window.location.pathname,
      });
    };

    // capture段で拾う（target=_blank遷移でもイベントが先に飛ぶ）
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return null;
}
