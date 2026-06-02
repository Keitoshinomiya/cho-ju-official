interface YouTubeEmbedProps {
  youtubeId: string;
  title: string;
  vertical?: boolean;
}

export default function YouTubeEmbed({ youtubeId, title, vertical = false }: YouTubeEmbedProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-hai bg-sumi ${
        vertical ? 'aspect-[9/16] max-w-[300px] mx-auto' : 'aspect-video'
      }`}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
