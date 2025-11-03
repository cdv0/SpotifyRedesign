import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PlayerBar } from './components/PlayerBar';
import { HomePage } from './components/pages/HomePage';
import { SearchPage } from './components/pages/SearchPage';
import { PlaylistPage } from './components/pages/PlaylistPage';
import { ArtistPage } from './components/pages/ArtistPage';
import { LibraryPage } from './components/pages/LibraryPage';

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  isDownloaded?: boolean;
};

export type Playlist = {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
  isOwned?: boolean;
};

export type Artist = {
  id: string;
  name: string;
  coverUrl: string;
  followers: string;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  coverUrl: string;
  type: 'album' | 'deluxe' | 'single' | 'compilation';
  isNewest?: boolean;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      id: '1',
      name: 'My Favorites',
      description: 'Your favorite tracks',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      songs: [],
      isOwned: true,
    },
    {
      id: '2',
      name: 'Chill Vibes',
      description: 'Relaxing music for any time',
      coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      songs: [],
      isOwned: true,
    },
  ]);

  const addSongToPlaylist = (playlistId: string, song: Song) => {
    setPlaylists(playlists.map(pl => 
      pl.id === playlistId 
        ? { ...pl, songs: [...pl.songs, song] }
        : pl
    ));
  };

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 flex flex-col">
        <TopBar isOfflineMode={isOfflineMode} setIsOfflineMode={setIsOfflineMode} />
        
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-neutral-900 to-black">
          {currentPage === 'home' && <HomePage playSong={playSong} setCurrentPage={setCurrentPage} />}
          {currentPage === 'search' && <SearchPage playSong={playSong} setCurrentPage={setCurrentPage} />}
          {currentPage === 'library' && <LibraryPage playlists={playlists} setCurrentPage={setCurrentPage} />}
          {currentPage.startsWith('playlist-') && (
            <PlaylistPage 
              playlistId={currentPage.replace('playlist-', '')}
              playlists={playlists}
              playSong={playSong}
              addSongToPlaylist={addSongToPlaylist}
            />
          )}
          {currentPage.startsWith('artist-') && (
            <ArtistPage 
              artistId={currentPage.replace('artist-', '')}
              playSong={playSong}
            />
          )}
        </main>
        
        <PlayerBar 
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isOfflineMode={isOfflineMode}
        />
      </div>
    </div>
  );
}
