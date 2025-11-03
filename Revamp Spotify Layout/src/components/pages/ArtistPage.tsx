import { useState } from 'react';
import { Play, Download, Search } from 'lucide-react';
import type { Song, Album } from '../../App';

interface ArtistPageProps {
  artistId: string;
  playSong: (song: Song) => void;
}

export function ArtistPage({ artistId, playSong }: ArtistPageProps) {
  const [albumSearchQuery, setAlbumSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'albums' | 'deluxe'>('all');

  // Mock artist data
  const artist = {
    id: artistId,
    name: 'The Weeknd',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=400&fit=crop',
    followers: '85,234,567',
  };

  const popularSongs: Song[] = [
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
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:35',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      title: 'Starboy',
      artist: 'The Weeknd',
      album: 'Starboy',
      duration: '3:50',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      isDownloaded: true,
    },
  ];

  const albums: Album[] = [
    {
      id: '1',
      title: 'After Hours',
      artist: 'The Weeknd',
      year: 2020,
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      type: 'album',
      isNewest: true,
    },
    {
      id: '2',
      title: 'Starboy',
      artist: 'The Weeknd',
      year: 2016,
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      type: 'album',
    },
    {
      id: '3',
      title: 'Beauty Behind the Madness',
      artist: 'The Weeknd',
      year: 2015,
      coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      type: 'album',
    },
    {
      id: '4',
      title: 'After Hours (Deluxe)',
      artist: 'The Weeknd',
      year: 2020,
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      type: 'deluxe',
    },
    {
      id: '5',
      title: 'Starboy (Deluxe)',
      artist: 'The Weeknd',
      year: 2016,
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      type: 'deluxe',
    },
    {
      id: '6',
      title: 'The Highlights',
      artist: 'The Weeknd',
      year: 2021,
      coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop',
      type: 'compilation',
    },
  ];

  // Filter albums by search and category
  const filteredAlbums = albums.filter(album => {
    const matchesSearch = album.title.toLowerCase().includes(albumSearchQuery.toLowerCase());
    const matchesCategory = 
      selectedCategory === 'all' || 
      (selectedCategory === 'albums' && album.type === 'album') ||
      (selectedCategory === 'deluxe' && (album.type === 'deluxe' || album.type === 'compilation'));
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-80 flex items-end p-8 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${artist.coverUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="relative z-10">
          <div className="w-6 h-6 bg-blue-500 rounded-full mb-4 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M9 12l-4.463 2.346-.457-.88L8.552 11.5 4.08 9.534l.457-.88L9 11zm7.615 0L21 14.07l-.457.881-4.428-1.966-4.472 1.966-.457-.88L15.658 12l-4.472-1.966.457-.88 4.472 1.966 4.428-1.966.457.88z"/>
            </svg>
          </div>
          <p className="text-sm mb-2">Verified Artist</p>
          <h1 className="text-7xl mb-6">{artist.name}</h1>
          <p className="text-sm">{artist.followers} monthly listeners</p>
        </div>
      </div>

      <div className="p-8">
        {/* Play Button */}
        <div className="flex items-center gap-6 mb-12">
          <button className="w-14 h-14 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
            <Play size={24} className="ml-1" />
          </button>
        </div>

        {/* Popular Songs */}
        <section className="mb-12">
          <h2 className="text-2xl mb-6">Popular</h2>
          <div className="space-y-2">
            {popularSongs.map((song, index) => (
              <div
                key={song.id}
                onClick={() => playSong(song)}
                className="grid grid-cols-[auto,1fr,auto] gap-4 p-3 hover:bg-neutral-800/50 rounded cursor-pointer group items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="text-neutral-400 w-8 text-center">{index + 1}</span>
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
                
                <div className="flex items-center gap-2 justify-end">
                  {/* IMPROVEMENT: Download indicator is more prominent */}
                  {song.isDownloaded && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                      <Download size={12} />
                      <span>Downloaded</span>
                    </div>
                  )}
                </div>
                
                <span className="text-neutral-400 text-sm text-right">{song.duration}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IMPROVEMENT: Better Discography Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Discography</h2>
          </div>

          {/* IMPROVEMENT: Album category filters */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-black'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('albums')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === 'albums'
                  ? 'bg-white text-black'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              Albums
            </button>
            <button
              onClick={() => setSelectedCategory('deluxe')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === 'deluxe'
                  ? 'bg-white text-black'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
            >
              Deluxe & Special Editions
            </button>
          </div>

          {/* IMPROVEMENT: Album search feature */}
          <div className="max-w-md mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                placeholder="Search albums..."
                value={albumSearchQuery}
                onChange={(e) => setAlbumSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-800 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* IMPROVEMENT: Clear album grid with better categorization */}
          <div className="grid grid-cols-5 gap-6">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                className="bg-neutral-800/30 hover:bg-neutral-700/30 p-4 rounded-lg cursor-pointer transition-all group"
              >
                <div className="relative mb-4">
                  <img 
                    src={album.coverUrl}
                    alt={album.title}
                    className="w-full aspect-square rounded object-cover"
                  />
                  
                  {/* IMPROVEMENT: "Newest" badge in bigger/bolder font */}
                  {album.isNewest && (
                    <div className="absolute top-2 right-2 bg-green-500 text-black px-3 py-1 rounded text-sm uppercase tracking-wide">
                      Newest
                    </div>
                  )}
                  
                  <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-105">
                    <Play size={20} className="ml-0.5" />
                  </button>
                </div>
                <h3 className="mb-1 truncate">{album.title}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <span>{album.year}</span>
                  <span>•</span>
                  <span className="capitalize">{album.type === 'deluxe' ? 'Deluxe' : album.type === 'compilation' ? 'Compilation' : 'Album'}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredAlbums.length === 0 && (
            <div className="text-center py-12 text-neutral-400">
              No albums found matching "{albumSearchQuery}"
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
