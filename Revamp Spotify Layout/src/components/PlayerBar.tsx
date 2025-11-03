import { Play, Pause, SkipBack, SkipForward, Volume2, Download } from 'lucide-react';
import type { Song } from '../App';

interface PlayerBarProps {
  currentSong: Song | null;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  isOfflineMode: boolean;
}

export function PlayerBar({ currentSong, isPlaying, setIsPlaying, isOfflineMode }: PlayerBarProps) {
  if (!currentSong) {
    return (
      <div className="h-24 bg-neutral-900 border-t border-neutral-800 px-4 flex items-center">
        <div className="text-neutral-500 text-sm">Select a song to play</div>
      </div>
    );
  }

  const isPlayingDownloaded = isOfflineMode || (currentSong.isDownloaded && !navigator.onLine);

  return (
    <div className="h-24 bg-neutral-900 border-t border-neutral-800 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <img 
          src={currentSong.coverUrl} 
          alt={currentSong.title}
          className="w-14 h-14 rounded"
        />
        <div className="flex flex-col">
          <span className="text-sm">{currentSong.title}</span>
          <span className="text-xs text-neutral-400">{currentSong.artist}</span>
          
          {/* IMPROVEMENT: Clear indicator of streaming vs downloaded playback */}
          <div className="flex items-center gap-2 mt-1">
            {isPlayingDownloaded ? (
              <div className="flex items-center gap-1 text-xs text-green-500">
                <Download size={12} />
                <span>Playing Downloaded</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-xs text-blue-500">
                <Volume2 size={12} />
                <span>Streaming</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center gap-4">
          <button className="text-neutral-400 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>
          <button className="text-neutral-400 hover:text-white">
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-neutral-400">1:24</span>
          <div className="flex-1 h-1 bg-neutral-700 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-neutral-400">{currentSong.duration}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <Volume2 size={20} className="text-neutral-400" />
        <div className="w-24 h-1 bg-neutral-700 rounded-full">
          <div className="w-2/3 h-full bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
