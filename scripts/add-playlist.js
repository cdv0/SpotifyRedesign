// Songs data is loaded from main.js (it's loaded before this script)
// Use window.songsData if available (has 50 songs)
const songsData = window.songsData || [];

let playlists = [];
try {
    const stored = localStorage.getItem('playlists');
    playlists = stored ? JSON.parse(stored) : [];
} catch (error) {
    console.error('Error loading playlists from localStorage:', error);
    playlists = [];
}
let currentPlaylistIndex = null;
let isViewMode = false;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewIndex = urlParams.get('view');
    const playlistId = urlParams.get('playlist');
    
    // Check if viewing a predefined playlist (Top 50, Trending, etc.)
    if (playlistId) {
        const playlistData = sessionStorage.getItem('viewingPlaylist');
        if (playlistData) {
            const playlist = JSON.parse(playlistData);
            displayPredefinedPlaylist(playlist);
            setupModal();
            return;
        }
    }
    
    if (viewIndex !== null) {
        // View existing playlist
        currentPlaylistIndex = parseInt(viewIndex);
        isViewMode = true;
        loadPlaylistView();
    } else {
        // Create new playlist mode
        setupCreateMode();
    }
    
    setupModal();
});

// Display predefined playlist (Top 50, Trending, etc.)
function displayPredefinedPlaylist(playlist) {
    // Hide create section
    const createSection = document.getElementById('createSection');
    if (createSection) {
        createSection.style.display = 'none';
    }
    
    // Show playlist view
    const playlistView = document.getElementById('playlistView');
    if (playlistView) {
        playlistView.style.display = 'block';
    }
    
    // Update playlist header
    const playlistNameEl = document.getElementById('playlistNameDisplay');
    if (playlistNameEl) {
        playlistNameEl.textContent = playlist.name;
    }
    
    const creatorEl = document.getElementById('playlistCreator');
    if (creatorEl) {
        creatorEl.textContent = 'Spotify';
    }
    
    // Update cover image
    const coverImageEl = document.getElementById('playlistCoverImage');
    if (coverImageEl) {
        coverImageEl.src = playlist.image;
    }
    
    // Calculate duration
    let totalSeconds = 0;
    playlist.songs.forEach(songId => {
        const song = songsData.find(s => s.id === songId);
        if (song) {
            const [minutes, seconds] = song.duration.split(':').map(Number);
            totalSeconds += minutes * 60 + seconds;
        }
    });
    const totalMinutes = Math.floor(totalSeconds / 60);
    const durationEl = document.getElementById('playlistDuration');
    if (durationEl) {
        durationEl.textContent = `${totalMinutes}min`;
    }
    
    // Load songs
    const songsList = document.getElementById('playlistSongsList');
    if (songsList) {
        let currentPlayingSongId = null;
        if (typeof window.currentSong !== 'undefined' && window.currentSong !== null) {
            currentPlayingSongId = window.currentSong.id;
        }
        
        const songsHtml = playlist.songs.map((songId, index) => {
            const song = songsData.find(s => s.id === songId);
            if (!song) return null;
            
            const isPlaying = currentPlayingSongId === song.id;
            
            return `
                <div class="song-item ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id})">
                    <span class="song-item-number">${index + 1}</span>
                    <div class="song-info">
                        <div class="song-name">${song.name}</div>
                        <div class="song-artist">
                            <span class="spotify-icon-dot">●</span> ${song.artist}
                        </div>
                    </div>
                    <div class="song-right-section">
                        <span class="song-duration">${song.duration}</span>
                        <button class="song-menu-btn" onclick="event.stopPropagation();" style="background: none; border: none; color: #b3b3b3; cursor: pointer; padding: 4px 8px; font-size: 20px; line-height: 1;">
                            ⋮
                        </button>
                    </div>
                </div>
            `;
        }).filter(html => html !== null).join('');
        
        songsList.innerHTML = songsHtml;
    }
    
    // Set up periodic refresh to show playing state
    if (window.playlistRefreshInterval) {
        clearInterval(window.playlistRefreshInterval);
    }
    window.playlistRefreshInterval = setInterval(() => {
        const playlistViewEl = document.getElementById('playlistView');
        if (playlistViewEl && playlistViewEl.style.display !== 'none') {
            displayPredefinedPlaylist(playlist);
        }
    }, 500);
}

function setupCreateMode() {
    const createBtn = document.getElementById('createPlaylistBtn');
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            const playlistName = document.getElementById('playlistNameInput')?.value.trim();
            if (!playlistName) {
                alert('Please enter a playlist name');
                return;
            }
            
            // Create new playlist
            const newPlaylist = {
                name: playlistName,
                creator: "You", // Default creator name
                songs: []
            };
            
            playlists.push(newPlaylist);
            try {
                localStorage.setItem('playlists', JSON.stringify(playlists));
            } catch (error) {
                console.error('Error saving playlist to localStorage:', error);
                alert('Error saving playlist. Please try again.');
                return;
            }
            
            // Switch to view mode
            currentPlaylistIndex = playlists.length - 1;
            isViewMode = true;
            loadPlaylistView();
            
            // Show "Add songs to playlist" button
            document.getElementById('addSongsSection').style.display = 'block';
        });
    }
}

function loadPlaylistView() {
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    
    const playlist = playlists[currentPlaylistIndex];
    
    // Hide create section
    document.getElementById('createSection').style.display = 'none';
    
    // Show playlist view
    const playlistView = document.getElementById('playlistView');
    playlistView.style.display = 'block';
    
    // Update playlist name
    const playlistNameEl = document.getElementById('playlistNameDisplay');
    if (playlistNameEl) {
        playlistNameEl.textContent = playlist.name;
    }
    
    // Update creator
    const creatorEl = document.getElementById('playlistCreator');
    if (creatorEl) {
        creatorEl.textContent = playlist.creator || 'You';
    }
    
    // Update playlist cover image if playlist has songs
    const coverImageEl = document.getElementById('playlistCoverImage');
    if (coverImageEl && playlist.songs.length > 0) {
        const firstSong = songsData.find(s => s.id === playlist.songs[0]);
        if (firstSong && firstSong.image) {
            coverImageEl.src = firstSong.image;
        }
    }
    
    // Update duration
    updatePlaylistDuration();
    
    // Load songs
    loadPlaylistSongs();
    updateSongCount();
    
    // Set up periodic refresh to show playing state
    if (window.playlistRefreshInterval) {
        clearInterval(window.playlistRefreshInterval);
    }
    window.playlistRefreshInterval = setInterval(() => {
        const playlistView = document.getElementById('playlistView');
        if (playlistView && playlistView.style.display !== 'none') {
            loadPlaylistSongs();
        }
    }, 500);
}

function loadPlaylistSongs() {
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    
    const playlist = playlists[currentPlaylistIndex];
    const songsList = document.getElementById('playlistSongsList');
    
    if (!songsList) return;
    
    updateSongCount();
    
    if (playlist.songs.length === 0) {
        songsList.innerHTML = '<p style="color: #b3b3b3; padding: 24px; text-align: center;">No songs in this playlist yet. Click "Add songs to playlist" to get started!</p>';
        return;
    }
    
    // Get current playing song from main.js global state (if available)
    let currentPlayingSongId = null;
    if (typeof window.currentSong !== 'undefined' && window.currentSong !== null) {
        currentPlayingSongId = window.currentSong.id;
    }
    
    const songsHtml = playlist.songs.map((songId, index) => {
        const song = songsData.find(s => s.id === songId);
        if (!song) return null;
        
        const isPlaying = currentPlayingSongId === song.id;
        
        return `
            <div class="song-item ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id})">
                <span class="song-item-number">${index + 1}</span>
                <div class="song-info">
                    <div class="song-name">${song.name}</div>
                    <div class="song-artist">
                        <span class="spotify-icon-dot">●</span> ${song.artist}
                    </div>
                </div>
                <div class="song-right-section">
                    <span class="song-duration">${song.duration}</span>
                    <button class="song-menu-btn" onclick="event.stopPropagation();" style="background: none; border: none; color: #b3b3b3; cursor: pointer; padding: 4px 8px; font-size: 20px; line-height: 1;">
                        ⋮
                    </button>
                </div>
            </div>
        `;
    }).filter(html => html !== null).join('');
    
    songsList.innerHTML = songsHtml;
}

function setupModal() {
    const addSongsBtn = document.getElementById('addSongsBtn');
    const modal = document.getElementById('addSongsModal');
    const closeBtn = document.getElementById('closeModalBtn');
    
    if (addSongsBtn) {
        addSongsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentPlaylistIndex === null) {
                alert('Please create a playlist first');
                return;
            }
            if (modal) modal.classList.add('active');
            loadSongsInModal();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// Store search input handler to prevent duplicate listeners
let searchInputHandler = null;

function loadSongsInModal() {
    const modalSongsList = document.getElementById('modalSongsList');
    if (!modalSongsList) return;
    
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    const playlist = playlists[currentPlaylistIndex];
    
    // Get filtered songs based on search
    const searchInput = document.getElementById('modalSearchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filteredSongs = songsData.filter(song => {
        if (!searchTerm) return true;
        return song.name.toLowerCase().includes(searchTerm) || 
               song.artist.toLowerCase().includes(searchTerm);
    });
    
    modalSongsList.innerHTML = filteredSongs.map(song => {
        const isAdded = playlist.songs.includes(song.id);
        
        return `
            <div class="modal-song-item">
                <img src="${song.image}" alt="${song.name}">
                <div class="modal-song-info">
                    <div class="modal-song-name">${song.name}</div>
                    <div class="modal-song-artist">${song.artist}</div>
                </div>
                <button class="add-icon-btn ${isAdded ? 'added' : ''}" 
                        onclick="addSongToPlaylist(${song.id}, ${isAdded})" 
                        ${isAdded ? 'disabled' : ''}>
                    ${isAdded ? '' : '+'}
                </button>
            </div>
        `;
    }).join('');
    
    // Setup search functionality - remove old listener first
    if (searchInput) {
        if (searchInputHandler) {
            searchInput.removeEventListener('input', searchInputHandler);
        }
        searchInputHandler = () => {
            loadSongsInModal();
        };
        searchInput.addEventListener('input', searchInputHandler);
    }
}

function addSongToPlaylist(songId, isAlreadyAdded) {
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    
    if (isAlreadyAdded) return;
    
    const playlist = playlists[currentPlaylistIndex];
    const song = songsData.find(s => s.id === songId);
    
    if (!playlist.songs.includes(songId) && song) {
        playlist.songs.push(songId);
        playlists[currentPlaylistIndex] = playlist;
        try {
            localStorage.setItem('playlists', JSON.stringify(playlists));
        } catch (error) {
            console.error('Error saving song to playlist:', error);
            alert('Error saving song. Please try again.');
            return;
        }
        
        // Show confirmation message with playlist name and song name
        showConfirmation(playlist.name, song.name);
        
        // Reload modal songs
        loadSongsInModal();
        
        // Reload playlist songs
        loadPlaylistSongs();
        
        // Update duration
        updatePlaylistDuration();
    }
}

function updateSongCount() {
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    const playlist = playlists[currentPlaylistIndex];
    const countEl = document.getElementById('playlistSongCount');
    if (countEl) {
        countEl.textContent = `${playlist.songs.length} song${playlist.songs.length !== 1 ? 's' : ''}`;
    }
}

function updatePlaylistDuration() {
    if (currentPlaylistIndex === null || !playlists[currentPlaylistIndex]) return;
    const playlist = playlists[currentPlaylistIndex];
    const durationEl = document.getElementById('playlistDuration');
    
    if (durationEl) {
        // Calculate total duration from songs
        let totalMinutes = 0;
        playlist.songs.forEach(songId => {
            const song = songsData.find(s => s.id === songId);
            if (song && song.duration) {
                const [mins, secs] = song.duration.split(':').map(Number);
                totalMinutes += mins + (secs / 60);
            }
        });
        
        durationEl.textContent = `${Math.round(totalMinutes)}min`;
    }
}

function showConfirmation(playlistName, songName) {
    const confirmation = document.getElementById('confirmationMessage');
    const confirmationText = document.getElementById('confirmationText');
    
    if (confirmation && confirmationText) {
        // Update confirmation message: "Added to playlist [name]: [song name]"
        confirmationText.textContent = `Added to playlist ${playlistName}: ${songName}`;
        confirmation.classList.add('active');
        updateSongCount();
        
        // Hide after 3 seconds
        setTimeout(() => {
            confirmation.classList.remove('active');
        }, 3000);
    }
}

function playSong(songId) {
    // Use the main player from main.js
    if (typeof window.playSong === 'function') {
        window.playSong(songId);
    }
    // Refresh playlist view to show playing state
    setTimeout(() => {
        loadPlaylistSongs();
    }, 100);
}

