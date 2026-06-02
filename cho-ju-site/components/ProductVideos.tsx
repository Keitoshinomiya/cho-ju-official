import { videos } from '@/lib/videos';
import YouTubeEmbed from './YouTubeEmbed';

export default function ProductVideos({ productId }: { productId: string }) {
  const items = videos.filter((v) => v.productId === productId);
  if (items.length === 0) return null;

  return (
    <section className="bg-kinari-deep py-24 sm:py-28 border-t border-hai/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
            <span className="w-6 h-px bg-shu mr-3" />
            Media
          </div>
          <p className="font-serif text-3xl sm:text-4xl font-medium text-sumi leading-snug">
            動画でわかる、使い心地
          </p>
          <p className="mt-5 max-w-xl mx-auto text-base text-sumi-soft leading-loose">
            YouTubeでご紹介いただいた、この製品のリアルな使用シーンです。
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((video) => (
            <div key={video.youtubeId}>
              <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} vertical={video.vertical} />
              <h3 className="mt-5 font-serif text-lg font-medium text-sumi leading-snug">
                {video.title}
              </h3>
              {video.channel && (
                <p className="mt-2 text-sm text-sumi-soft">{video.channel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
