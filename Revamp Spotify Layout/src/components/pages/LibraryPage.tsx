import type { Playlist } from '../../App';

interface LibraryPageProps {
  playlists: Playlist[];
  setCurrentPage: (page: string) => void;
}

export function LibraryPage({ playlists, setCurrentPage }: LibraryPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Your Library</h1>

      <div className="grid grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() => setCurrentPage(`playlist-${playlist.id}`)}
            className="bg-neutral-800/30 hover:bg-neutral-700/30 p-4 rounded-lg cursor-pointer transition-all group"
          >
            <div className="relative mb-4">
              <img 
                src={playlist.coverUrl}
                alt={playlist.name}
                className="w-full aspect-square rounded object-cover"
              />
            </div>
            <h3 className="mb-1">{playlist.name}</h3>
            <p className="text-sm text-neutral-400">{playlist.description}</p>
            <p className="text-xs text-neutral-500 mt-2">{playlist.songs.length} songs</p>
          </div>
        ))}
      </div>
    </div>
  );
}
