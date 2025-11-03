// TopBar.tsx
// This component is used to display the top bar
// It is used in the components/ui folder to display the top bar
// It is also used in the components/ui/top-bar.tsx file to display the top bar
// It is also used in the components/ui/top-bar.tsx file to display the top bar
import { ChevronLeft, ChevronRight, WifiOff, Wifi } from 'lucide-react';

interface TopBarProps {
  isOfflineMode: boolean;
  setIsOfflineMode: (value: boolean) => void;
}

export function TopBar({ isOfflineMode, setIsOfflineMode }: TopBarProps) {
  return (
    <div className="h-16 bg-neutral-900/50 backdrop-blur-md flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60">
          <ChevronLeft size={20} />
        </button>
        <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOfflineMode(!isOfflineMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            isOfflineMode 
              ? 'bg-blue-600 text-white' 
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
          }`}
        >
          {isOfflineMode ? <WifiOff size={16} /> : <Wifi size={16} />}
          <span className="text-sm">{isOfflineMode ? 'Offline Mode' : 'Online'}</span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
          <span className="text-sm">U</span>
        </div>
      </div>
    </div>
  );
}
