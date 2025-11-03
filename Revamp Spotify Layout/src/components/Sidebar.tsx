// Sidebar.tsx
// This component is used to display the sidebar
// It is used in the components/ui folder to display the sidebar
// It is also used in the components/ui/sidebar.tsx file to display the sidebar
// It is also used in the components/ui/sidebar.tsx file to display the sidebar
import { Home, Search, Library, Plus } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Your Library' },
  ];

  return (
    <div className="w-60 bg-black flex flex-col p-6 gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-black">♪</span>
        </div>
        <span className="text-xl">Spotify</span>
      </div>

      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center gap-4 px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? 'text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Icon size={24} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-4 px-3 py-2 text-neutral-400 hover:text-white cursor-pointer">
        <Plus size={24} />
        <span>Create Playlist</span>
      </div>
    </div>
  );
}
