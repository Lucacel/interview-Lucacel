export interface SongCardProps {
  title: string;
  artist: string;
  album: string;
  image: string;
}

export function SongCard({ title, artist, album, image }: SongCardProps) {
  return (
    <div className="flex flex-row">
      <img
        src={image}
        alt={title}
        className="w-10 h-10 border border-border rounded-md"
      />
      <div className="ml-4">
        <span className="font-bold">{title}</span>
        <div className="flex flex-row gap-2">
          <span>{artist}</span>
          <span>•</span>
          <span>{album}</span>
        </div>
      </div>
    </div>
  );
}
