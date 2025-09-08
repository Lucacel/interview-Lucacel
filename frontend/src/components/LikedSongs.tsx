import { useState, useEffect } from "react";
import { useStore } from "@tanstack/react-store";
import trackStore from "@/stores/trackStore";
import { lookupTracks } from "@/services/musicApi";
import { SongCard, SongCardProps } from "@/components/SongCard";
import { Heart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function LikedSongs() {
  const likedTracks = useStore(trackStore, (state) => state.likedTracks);
  const [tracks, setTracks] = useState<SongCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLikedTracks = async () => {
      if (likedTracks.size === 0) {
        setTracks([]);
        return;
      }

      setError(null);

      try {
        const trackIds = Array.from(likedTracks);
        const fetchedTracks = await lookupTracks(trackIds);
        setTracks(fetchedTracks);
      } catch (err) {
        setError("Failed to load liked songs");
        console.error("Error fetching liked tracks:", err);
      } finally {
      }
    };

    fetchLikedTracks();
  }, [likedTracks]);

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">No liked songs yet</h3>
          <p className="text-gray-600">
            Start searching for music and like songs to see them here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-antiflash-white">
        Liked Songs
      </h2>
      <div className="space-y-4">
        <AnimatePresence>
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-alabaster rounded-lg p-4"
            >
              <SongCard {...track} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
