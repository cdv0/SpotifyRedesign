// HomePage.tsx
// This component is used to display the home page
// It is used in the components/pages folder to display the home page
// It is also used in the components/pages/HomePage.tsx file to display the home page
// It is also used in the components/pages/HomePage.tsx file to display the home page
import type { Song } from '../../App';

interface HomePageProps {
  playSong: (song: Song) => void;
  setCurrentPage?: (page: string) => void;
}

export function HomePage({ playSong }: HomePageProps) {
  const recentPlaylists = [
    {
      id: '1',
      name: 'Today\'s Top Hits',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    },
    {
      id: '2',
      name: 'RapCaviar',
      coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      name: 'Rock Classics',
      coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop',
    },
    {
      id: '4',
      name: 'Chill Hits',
      coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Good afternoon</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-10">
        {recentPlaylists.slice(0, 4).map((playlist) => (
          <div
            key={playlist.id}
            className="bg-neutral-800/50 hover:bg-neutral-700/50 rounded flex items-center gap-4 cursor-pointer transition-colors overflow-hidden group"
          >
            <img 
              src={playlist.coverUrl}
              alt={playlist.name}
              className="w-20 h-20"
            />
            <span className="flex-1">{playlist.name}</span>
            <button className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center mr-4 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
              <Play size={20} className="ml-0.5" />
            </button>
          </div>
        ))}
      </div>

      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl">Made for you</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-neutral-800/30 hover:bg-neutral-700/30 p-4 rounded-lg cursor-pointer transition-all group"
            >
              <div className="relative mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-${1470225620780 + i * 1000}-dba8ba36b745?w=300&h=300&fit=crop`}
                  alt="Playlist"
                  className="w-full aspect-square rounded object-cover"
                />
                <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-105">
                  <Play size={20} className="ml-0.5" />
                </button>
              </div>
              <h3 className="mb-2">Daily Mix {i}</h3>
              <p className="text-sm text-neutral-400">Your favorite songs mixed together</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Play({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
