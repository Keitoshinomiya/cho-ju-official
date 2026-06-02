import { videos } from '@/lib/videos';
import YouTubeEmbed from './YouTubeEmbed';

export default function VideoSection() {
  if (videos.length === 0) return null;

  // 横動画（16:9）と縦動画（ショート / 9:16）を分けて、それぞれ揃ったグリッドに並べる
  const horizontalVideos = videos.filter((v) => !v.vertical);
  const verticalVideos = videos.filter((v) => v.vertical);

  return (
    <section id="media" className="bg-kinari-deep py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
            <span className="w-6 h-px bg-shu mr-3" />
            Media
          </div>
          <p className="font-serif text-3xl sm:text-4xl font-medium text-sumi leading-snug">
            動画で見る、CHO-JUのある暮らし
          </p>
          <p className="mt-5 max-w-xl mx-auto text-base text-sumi-soft leading-loose">
            YouTubeでご紹介いただいた、実際の使用シーンをご覧ください。
          </p>
        </div>

        {/* 横動画（16:9）: 高さが揃うので 2〜3 カラムで整列 */}
        {horizontalVideos.length > 0 && (
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {horizontalVideos.map((video) => (
              <div key={video.youtubeId} className="flex flex-col">
                <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
                <h3 className="mt-5 font-serif text-lg font-medium text-sumi leading-snug">
                  {video.title}
                </h3>
                {video.channel && (
                  <p className="mt-2 text-sm text-sumi-soft">{video.channel}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 縦動画（YouTubeショート / 9:16）: 横動画とは別の行で、幅の狭いカラムに揃える */}
        {verticalVideos.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-center text-sumi-soft text-xs tracking-[0.25em] uppercase mb-10">
              <span className="w-5 h-px bg-shu mr-3" />
              Shorts
              <span className="w-5 h-px bg-shu ml-3" />
            </div>
            <div className="grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
              {verticalVideos.map((video) => (
                <div key={video.youtubeId} className="flex flex-col">
                  <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} vertical />
                  <h3 className="mt-4 font-serif text-sm font-medium text-sumi leading-snug">
                    {video.title}
                  </h3>
                  {video.channel && (
                    <p className="mt-1.5 text-xs text-sumi-soft">{video.channel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
