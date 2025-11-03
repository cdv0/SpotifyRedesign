// SearchPage.tsx
// This component is used to display the search page
// It is used in the components/pages folder to display the search page
// It is also used in the components/pages/HomePage.tsx file to display the search page
// It is also used in the components/pages/SearchPage.tsx file to display the search page
// It is also used in the components/pages/PlaylistPage.tsx file to display the search page
// It is also used in the components/pages/LibraryPage.tsx file to display the search page
// It is also used in the components/pages/ArtistPage.tsx file to display the search page
import { useState } from 'react';
import { Search, Play } from 'lucide-react';
import type { Song } from '../../App';

interface SearchPageProps {
  playSong: (song: Song) => void;
  setCurrentPage?: (page: string) => void;
}

export function SearchPage({ playSong, setCurrentPage }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const songs: Song[] = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isDownloaded: true,
    },
    {
      id: '2',
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:35',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isDownloaded: true,
    },
  ];

  const artists = [
    { id: '1', name: 'The Weeknd', coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop' },
    { id: '2', name: 'Dua Lipa', coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
  ];

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showResults = searchQuery.length > 0;

  return (
    <div className="p-8">
      <div className="max-w-md mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-black placeholder:text-neutral-600 outline-none"
          />
        </div>
      </div>

      {!showResults ? (
        <>
          <h2 className="text-2xl mb-6">Browse all</h2>
          <div className="grid grid-cols-4 gap-6">
            {['Podcasts', 'Made For You', 'Charts', 'New Releases', 'Discover', 'Live Events', 'Hip-Hop', 'Rock'].map((category, i) => (
              <div
                key={category}
                className="aspect-square rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundColor: `hsl(${i * 45}, 70%, 50%)` }}
              >
                <h3 className="text-xl">{category}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {/* IMPROVEMENT: Songs appear first in search results for easier discovery */}
          {filteredSongs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl mb-6">Songs</h2>
              <div className="space-y-2">
                {filteredSongs.map((song, index) => (
                  <div
                    key={song.id}
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
                    
                    <div className="flex items-center gap-4">
                      {song.isDownloaded && (
                        <span className="text-green-500 text-xs">Downloaded</span>
                      )}
                      <span className="text-neutral-400 text-sm">{song.duration}</span>
                      <button className="opacity-0 group-hover:opacity-100 w-10 h-10 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition-all">
                        <Play size={16} className="ml-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {filteredArtists.length > 0 && (
            <section>
              <h2 className="text-2xl mb-6">Artists</h2>
              <div className="grid grid-cols-5 gap-6">
                {filteredArtists.map((artist) => (
                  <div
                    key={artist.id}
                    onClick={() => setCurrentPage?.(`artist-${artist.id}`)}
                    className="bg-neutral-800/30 hover:bg-neutral-700/30 p-4 rounded-lg cursor-pointer transition-all group"
                  >
                    <div className="relative mb-4">
                      <img 
                        src={artist.coverUrl}
                        alt={artist.name}
                        className="w-full aspect-square rounded-full object-cover"
                      />
                      <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-105">
                        <Play size={20} className="ml-0.5" />
                      </button>
                    </div>
                    <h3 className="text-center">{artist.name}</h3>
                    <p className="text-sm text-neutral-400 text-center">Artist</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
