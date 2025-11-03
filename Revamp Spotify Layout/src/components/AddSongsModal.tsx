// AddSongsModal.tsx
// This component is used to display the add songs modal
// It is used in the components/ui folder to display the add songs modal
// It is also used in the components/ui/add-songs-modal.tsx file to display the add songs modal
// It is also used in the components/ui/add-songs-modal.tsx file to display the add songs modal
import { useState } from 'react';
import { X, Search, Check } from 'lucide-react';
import type { Song } from '../App';

interface AddSongsModalProps {
  isOpen: boolean;
  onClose: () => void;
  playlistId: string;
  playlistName: string;
  addSongToPlaylist: (playlistId: string, song: Song) => void;
}

export function AddSongsModal({ isOpen, onClose, playlistId, playlistName, addSongToPlaylist }: AddSongsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedSongs, setAddedSongs] = useState<Set<string>>(new Set());

  // Mock available songs
  const availableSongs: Song[] = [
    {
      id: 's1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isDownloaded: true,
    },
    {
      id: 's2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    },
    {
      id: 's3',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:35',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isDownloaded: true,
    },
    {
      id: 's4',
      title: 'good 4 u',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '2:58',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    },
    {
      id: 's5',
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      album: 'F*ck Love 3',
      duration: '2:21',
      coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    },
  ];

  const filteredSongs = availableSongs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSong = (song: Song) => {
    addSongToPlaylist(playlistId, song);
    setAddedSongs(new Set([...addedSongs, song.id]));
    
    // Clear confirmation after 2 seconds
    setTimeout(() => {
      setAddedSongs(prev => {
        const newSet = new Set(prev);
        newSet.delete(song.id);
        return newSet;
      });
    }, 2000);
  };

  const handleClose = () => {
    setSearchQuery('');
    setAddedSongs(new Set());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={handleClose}>
      <div className="bg-neutral-900 rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <h2 className="text-2xl">Add songs to {playlistName}</h2>
          <button onClick={handleClose} className="text-neutral-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 border-b border-neutral-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search for songs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-500"
              autoFocus
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-2">
            {filteredSongs.map((song) => {
              const isAdded = addedSongs.has(song.id);
              
              return (
                <div
                  key={song.id}
                  className="flex items-center gap-3 p-3 hover:bg-neutral-800/50 rounded group"
                >
                  <img 
                    src={song.coverUrl}
                    alt={song.title}
                    className="w-12 h-12 rounded"
                  />
                  <div className="flex-1">
                    <div className="text-white">{song.title}</div>
                    <div className="text-sm text-neutral-400">{song.artist}</div>
                  </div>
                  <span className="text-neutral-400 text-sm mr-4">{song.duration}</span>
                  
                  {/* IMPROVEMENT: Explicit confirmation with checkmark */}
                  {isAdded ? (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-full">
                      <Check size={16} />
                      <span className="text-sm">Added to playlist</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddSong(song)}
                      className="px-4 py-2 border border-neutral-400 text-neutral-400 rounded-full hover:border-white hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      Add
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
