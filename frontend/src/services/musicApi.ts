import { SongCardProps } from "@/components/SongCard";

export const searchTracks = async (
  searchTerm: string
): Promise<SongCardProps[]> => {
  if (!searchTerm.trim()) return [];

  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      searchTerm
    )}&media=music&entity=song&limit=10`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  const data = await response.json();
  return data.results.map((song: any) => ({
    title: song.trackName,
    artist: song.artistName,
    album: song.collectionName,
    image: song.artworkUrl100,
  }));
};
