import { useState } from 'react';
import { Play, Download, MoreHorizontal } from 'lucide-react';
import { AddSongsModal } from '../AddSongsModal';
import type { Song, Playlist } from '../../App';

interface PlaylistPageProps {
  playlistId: string;
  playlists: Playlist[];
  playSong: (song: Song) => void;
  addSongToPlaylist: (playlistId: string, song: Song) => void;
}

export function PlaylistPage({ playlistId, playlists, playSong, addSongToPlaylist }: PlaylistPageProps) {
  const [isAddSongsModalOpen, setIsAddSongsModalOpen] = useState(false);
  
  const playlist = playlists.find(p => p.id === playlistId);

  if (!playlist) {
    return <div className="p-8">Playlist not found</div>;
  }

  return (
    <>
      <div className="p-8">
        <div className="flex items-end gap-6 mb-8">
          <img 
            src={playlist.coverUrl}
            alt={playlist.name}
            className="w-56 h-56 rounded shadow-2xl"
          />
          <div className="flex flex-col justify-end">
            <span className="text-sm uppercase mb-2">Playlist</span>
            <h1 className="text-6xl mb-6">{playlist.name}</h1>
            <p className="text-neutral-400 mb-2">{playlist.description}</p>
            <p className="text-sm">
              <span className="text-white">{playlist.songs.length} songs</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <button className="w-14 h-14 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
            <Play size={24} className="ml-1" />
          </button>
          
          {/* IMPROVEMENT: Clear "Add Songs" button with better workflow */}
          {playlist.isOwned && (
            <button
              onClick={() => setIsAddSongsModalOpen(true)}
              className="px-6 py-3 border border-neutral-400 text-neutral-400 rounded-full hover:border-white hover:text-white transition-colors"
            >
              Add Songs to Playlist
            </button>
          )}
        </div>

        {playlist.songs.length > 0 ? (
          <div className="space-y-2">
            <div className="grid grid-cols-[auto,1fr,1fr,auto] gap-4 px-3 py-2 text-neutral-400 text-sm border-b border-neutral-800">
              <span className="w-8 text-center">#</span>
              <span>Title</span>
              <span>Album</span>
              <span className="text-right pr-14">Duration</span>
            </div>
            
            {playlist.songs.map((song, index) => (
              <div
                key={`${song.id}-${index}`}
                onClick={() => playSong(song)}
                className="grid grid-cols-[auto,1fr,1fr,auto] gap-4 p-3 hover:bg-neutral-800/50 rounded cursor-pointer group items-center"
              >
                <span className="text-neutral-400 w-8 text-center">{index + 1}</span>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={song.coverUrl}
                    alt={song.title}
                    className="w-10 h-10 rounded"
                  />
                  <div>
                    <div className="text-white">{song.title}</div>
                    <div className="text-sm text-neutral-400">{song.artist}</div>
                  </div>
                </div>
                
                <div className="text-neutral-400 text-sm">{song.album}</div>
                
                <div className="flex items-center gap-4 justify-end">
                  {song.isDownloaded && (
                    <Download size={16} className="text-green-500" />
                  )}
                  <span className="text-neutral-400 text-sm">{song.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-white">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            <p className="mb-4">This playlist is empty</p>
            <button
              onClick={() => setIsAddSongsModalOpen(true)}
              className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform"
            >
              Add Songs
            </button>
          </div>
        )}
      </div>

      {/* IMPROVEMENT: Modal for adding songs with explicit confirmation */}
      <AddSongsModal
        isOpen={isAddSongsModalOpen}
        onClose={() => setIsAddSongsModalOpen(false)}
        playlistId={playlistId}
        playlistName={playlist.name}
        addSongToPlaylist={addSongToPlaylist}
      />
    </>
  );
}
