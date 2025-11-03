// Sample data
const albumsData = [
    { id: 0, name: "Top 50 Global", image: "assets/img8.jpg", desc: "Your weekly update", bgColor: "#2a4365" },
    { id: 1, name: "Top 50 India", image: "assets/img9.jpg", desc: "Your weekly update", bgColor: "#22543d" },
    { id: 2, name: "Trending India", image: "assets/img10.jpg", desc: "Your weekly update", bgColor: "#742a2a" },
    { id: 3, name: "Trending Global", image: "assets/img16.jpg", desc: "Your weekly update", bgColor: "#44337a" },
    { id: 4, name: "Mega Hits", image: "assets/img11.jpg", desc: "Your weekly update", bgColor: "#234e52" },
    { id: 5, name: "Happy Favorites", image: "assets/img15.jpg", desc: "Your weekly update", bgColor: "#744210" }
];

// Make songsData globally available - 50 songs
const songsData = [
    { id: 0, name: "Song One", image: "assets/img1.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:00", artist: "Artist One" },
    { id: 1, name: "Song Two", image: "assets/img2.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:20", artist: "Artist Two" },
    { id: 2, name: "Song Three", image: "assets/img3.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:32", artist: "Artist Three" },
    { id: 3, name: "Song Four", image: "assets/img4.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:50", artist: "Artist Four" },
    { id: 4, name: "Song Five", image: "assets/img5.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:10", artist: "Artist Five" },
    { id: 5, name: "Song Six", image: "assets/img14.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:45", artist: "Artist Six" },
    { id: 6, name: "Song Seven", image: "assets/img7.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:18", artist: "Artist Seven" },
    { id: 7, name: "Song Eight", image: "assets/img12.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:35", artist: "Artist Eight" },
    { id: 8, name: "Song Nine", image: "assets/img1.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:15", artist: "Artist Nine" },
    { id: 9, name: "Song Ten", image: "assets/img2.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:45", artist: "Artist Ten" },
    { id: 10, name: "Song Eleven", image: "assets/img3.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:20", artist: "Artist Eleven" },
    { id: 11, name: "Song Twelve", image: "assets/img4.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:55", artist: "Artist Twelve" },
    { id: 12, name: "Song Thirteen", image: "assets/img5.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:05", artist: "Artist Thirteen" },
    { id: 13, name: "Song Fourteen", image: "assets/img14.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:40", artist: "Artist Fourteen" },
    { id: 14, name: "Song Fifteen", image: "assets/img7.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:30", artist: "Artist Fifteen" },
    { id: 15, name: "Song Sixteen", image: "assets/img12.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:25", artist: "Artist Sixteen" },
    { id: 16, name: "Song Seventeen", image: "assets/img1.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:12", artist: "Artist Seventeen" },
    { id: 17, name: "Song Eighteen", image: "assets/img2.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:50", artist: "Artist Eighteen" },
    { id: 18, name: "Song Nineteen", image: "assets/img3.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:25", artist: "Artist Nineteen" },
    { id: 19, name: "Song Twenty", image: "assets/img4.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:38", artist: "Artist Twenty" },
    { id: 20, name: "Song Twenty-One", image: "assets/img5.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:10", artist: "Artist Twenty-One" },
    { id: 21, name: "Song Twenty-Two", image: "assets/img14.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:55", artist: "Artist Twenty-Two" },
    { id: 22, name: "Song Twenty-Three", image: "assets/img7.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:15", artist: "Artist Twenty-Three" },
    { id: 23, name: "Song Twenty-Four", image: "assets/img12.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:40", artist: "Artist Twenty-Four" },
    { id: 24, name: "Song Twenty-Five", image: "assets/img1.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:20", artist: "Artist Twenty-Five" },
    { id: 25, name: "Song Twenty-Six", image: "assets/img2.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:50", artist: "Artist Twenty-Six" },
    { id: 26, name: "Song Twenty-Seven", image: "assets/img3.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:05", artist: "Artist Twenty-Seven" },
    { id: 27, name: "Song Twenty-Eight", image: "assets/img4.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:45", artist: "Artist Twenty-Eight" },
    { id: 28, name: "Song Twenty-Nine", image: "assets/img5.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:30", artist: "Artist Twenty-Nine" },
    { id: 29, name: "Song Thirty", image: "assets/img14.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:35", artist: "Artist Thirty" },
    { id: 30, name: "Song Thirty-One", image: "assets/img7.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:12", artist: "Artist Thirty-One" },
    { id: 31, name: "Song Thirty-Two", image: "assets/img12.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:55", artist: "Artist Thirty-Two" },
    { id: 32, name: "Song Thirty-Three", image: "assets/img1.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:25", artist: "Artist Thirty-Three" },
    { id: 33, name: "Song Thirty-Four", image: "assets/img2.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:40", artist: "Artist Thirty-Four" },
    { id: 34, name: "Song Thirty-Five", image: "assets/img3.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:15", artist: "Artist Thirty-Five" },
    { id: 35, name: "Song Thirty-Six", image: "assets/img4.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:50", artist: "Artist Thirty-Six" },
    { id: 36, name: "Song Thirty-Seven", image: "assets/img5.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:20", artist: "Artist Thirty-Seven" },
    { id: 37, name: "Song Thirty-Eight", image: "assets/img14.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:45", artist: "Artist Thirty-Eight" },
    { id: 38, name: "Song Thirty-Nine", image: "assets/img7.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:10", artist: "Artist Thirty-Nine" },
    { id: 39, name: "Song Forty", image: "assets/img12.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:55", artist: "Artist Forty" },
    { id: 40, name: "Song Forty-One", image: "assets/img1.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:30", artist: "Artist Forty-One" },
    { id: 41, name: "Song Forty-Two", image: "assets/img2.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:35", artist: "Artist Forty-Two" },
    { id: 42, name: "Song Forty-Three", image: "assets/img3.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:12", artist: "Artist Forty-Three" },
    { id: 43, name: "Song Forty-Four", image: "assets/img4.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:50", artist: "Artist Forty-Four" },
    { id: 44, name: "Song Forty-Five", image: "assets/img5.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "3:25", artist: "Artist Forty-Five" },
    { id: 45, name: "Song Forty-Six", image: "assets/img14.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "2:40", artist: "Artist Forty-Six" },
    { id: 46, name: "Song Forty-Seven", image: "assets/img7.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "3:15", artist: "Artist Forty-Seven" },
    { id: 47, name: "Song Forty-Eight", image: "assets/img12.jpg", file: "assets/song1.mp3", desc: "Put a smile on your face", duration: "2:55", artist: "Artist Forty-Eight" },
    { id: 48, name: "Song Forty-Nine", image: "assets/img1.jpg", file: "assets/song2.mp3", desc: "Put a smile on your face", duration: "3:20", artist: "Artist Forty-Nine" },
    { id: 49, name: "Song Fifty", image: "assets/img2.jpg", file: "assets/song3.mp3", desc: "Put a smile on your face", duration: "2:45", artist: "Artist Fifty" }
];

// Make songsData globally available for other scripts
window.songsData = songsData;

// Predefined playlists (Top 50, Trending, etc.) - Each with 50 songs
const predefinedPlaylists = [
    {
        id: 'top50-global',
        name: 'Top 50 Global',
        image: 'assets/img8.jpg',
        songs: Array.from({length: 50}, (_, i) => i) // Songs 0-49
    },
    {
        id: 'top50-india',
        name: 'Top 50 India',
        image: 'assets/img9.jpg',
        songs: Array.from({length: 50}, (_, i) => (i + 10) % 50) // Rotated for variety
    },
    {
        id: 'trending-india',
        name: 'Trending India',
        image: 'assets/img10.jpg',
        songs: Array.from({length: 50}, (_, i) => (i + 20) % 50) // Rotated for variety
    },
    {
        id: 'top50-usa',
        name: 'Top 50 USA',
        image: 'assets/img16.jpg',
        songs: Array.from({length: 50}, (_, i) => (i + 5) % 50) // Rotated for variety
    },
    {
        id: 'top50-uk',
        name: 'Top 50 UK',
        image: 'assets/img11.jpg',
        songs: Array.from({length: 50}, (_, i) => (i + 15) % 50) // Rotated for variety
    },
    {
        id: 'top50-canada',
        name: 'Top 50 Canada',
        image: 'assets/img15.jpg',
        songs: Array.from({length: 50}, (_, i) => (i + 25) % 50) // Rotated for variety
    }
];

// Make predefinedPlaylists globally available for search
window.predefinedPlaylists = predefinedPlaylists;

const artistsData = [
    { id: 0, name: "Taylor Swift", image: "assets/img1.jpg" },
    { id: 1, name: "The Weeknd", image: "assets/img2.jpg" },
    { id: 2, name: "Drake", image: "assets/img3.jpg" },
    { id: 3, name: "Ariana Grande", image: "assets/img4.jpg" },
    { id: 4, name: "Ed Sheeran", image: "assets/img5.jpg" }
];

// Global state
let currentSong = null;
let currentAudio = null;
let isPlaying = false;
let isStreaming = true; // true = streaming, false = downloaded
let currentTime = 0;

// Make currentSong accessible globally for other scripts
window.currentSong = null;
let playlists = [];
try {
    const stored = localStorage.getItem('playlists');
    playlists = stored ? JSON.parse(stored) : [];
} catch (error) {
    console.error('Error loading playlists from localStorage:', error);
    playlists = [];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
    loadAlbums();
    loadSongs();
    setupSearch();
    loadPlaylists();
});

function initializePlayer() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.querySelector('.progress-bar');
    const volumeSlider = document.getElementById('volumeSlider');
    const toggleSourceBtn = document.getElementById('toggleSourceBtn');

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            if (currentAudio) {
                currentAudio.currentTime = percent * currentAudio.duration;
            }
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            if (currentAudio) {
                currentAudio.volume = e.target.value / 100;
            }
        });
    }

    if (toggleSourceBtn) {
        toggleSourceBtn.addEventListener('click', toggleSource);
    }
}

function loadAlbums() {
    const albumsGrid = document.getElementById('albumsGrid');
    if (!albumsGrid) return;

    albumsGrid.innerHTML = albumsData.map(album => `
        <div class="album-card" onclick="playAlbum(${album.id})">
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.desc}</p>
        </div>
    `).join('');
}

function loadSongs() {
    const recentSongs = document.getElementById('recentSongs');
    if (!recentSongs) return;

    recentSongs.innerHTML = songsData.slice(0, 6).map((song, index) => `
        <div class="song-item" onclick="playSong(${song.id})">
            <img src="${song.image}" alt="${song.name}">
            <div class="song-info">
                <div class="song-name">${song.name}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <span class="song-duration">${song.duration}</span>
        </div>
    `).join('');
}

function playSong(songId) {
    const song = songsData.find(s => s.id === songId);
    if (!song) return;

    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    // Update player UI
    const playerImage = document.getElementById('playerSongImage');
    const playerName = document.getElementById('playerSongName');
    const playerArtist = document.getElementById('playerSongArtist');
    
    if (playerImage) playerImage.src = song.image;
    if (playerName) playerName.textContent = song.name;
    if (playerArtist) playerArtist.textContent = song.artist;

    // Create and play audio
    currentAudio = new Audio(song.file);
    currentSong = song;
    window.currentSong = currentSong; // Update global reference
    currentAudio.volume = document.getElementById('volumeSlider')?.value / 100 || 0.5;
    
    currentAudio.addEventListener('timeupdate', updateProgress);
    currentAudio.addEventListener('ended', playNext);
    currentAudio.addEventListener('error', (e) => {
        console.error('Error playing audio:', e);
        alert('Error playing song. Please try another one.');
    });
    
    currentAudio.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('Error playing song. Please try another one.');
    });
    isPlaying = true;
    updatePlayPauseButton();

    // Update source indicator
    updateSourceIndicator();
}

// Expose playSong globally for use in other scripts
window.playSong = playSong;

function playAlbum(albumId) {
    // Play first song from album
    const firstSong = songsData[0];
    if (firstSong) playSong(firstSong.id);
}

// Expose functions globally for onclick handlers
window.playAlbum = playAlbum;

function playQuickItem(index) {
    // Map index to predefined playlist
    const playlistMap = ['top50-global', 'top50-india', 'trending-india'];
    const playlistId = playlistMap[index];
    
    if (playlistId) {
        openPlaylistView(playlistId);
    } else {
        // Fallback to album play
        playAlbum(index);
    }
}

// Open a predefined playlist view
function openPlaylistView(playlistId) {
    const playlist = predefinedPlaylists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    // Store playlist data temporarily
    sessionStorage.setItem('viewingPlaylist', JSON.stringify(playlist));
    
    // Navigate to playlist view page
    window.location.href = `add-playlist.html?playlist=${playlistId}`;
}

// Expose functions globally
window.playQuickItem = playQuickItem;
window.openPlaylistView = openPlaylistView;

function togglePlayPause() {
    if (!currentAudio) {
        // Play first song if nothing is playing
        if (songsData.length > 0) playSong(songsData[0].id);
        return;
    }

    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
    } else {
        currentAudio.play();
        isPlaying = true;
    }
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    const icon = document.getElementById('playPauseIcon');
    if (icon) {
        icon.src = isPlaying ? 'assets/icons/pause.png' : 'assets/icons/play.png';
    }
}

function playNext() {
    if (!currentSong) return;
    const currentIndex = songsData.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songsData.length;
    playSong(songsData[nextIndex].id);
}

function playPrevious() {
    if (!currentSong) return;
    const currentIndex = songsData.findIndex(s => s.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? songsData.length - 1 : currentIndex - 1;
    playSong(songsData[prevIndex].id);
}

function updateProgress() {
    if (!currentAudio) return;
    const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
    document.getElementById('progressFill').style.width = percent + '%';
    
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    
    if (currentTimeEl) currentTimeEl.textContent = formatTime(currentAudio.currentTime);
    if (totalTimeEl) totalTimeEl.textContent = formatTime(currentAudio.duration);
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function toggleSource() {
    isStreaming = !isStreaming;
    updateSourceIndicator();
}

function updateSourceIndicator() {
    const sourceText = document.getElementById('sourceText');
    const toggleBtn = document.getElementById('toggleSourceBtn');
    
    if (sourceText) {
        sourceText.textContent = isStreaming ? 'Streaming' : 'Downloaded';
    }
    
    if (toggleBtn) {
        toggleBtn.textContent = isStreaming ? 'Download' : 'Stream';
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const homeContent = document.getElementById('homeContent');

    if (!searchInput) {
        console.error('searchInput element not found');
        return;
    }
    
    if (!searchResults) {
        console.error('searchResults element not found');
        return;
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        if (query.length > 0) {
            searchResults.style.display = 'block';
            if (homeContent) homeContent.style.display = 'none';
            performSearch(query);
        } else {
            searchResults.style.display = 'none';
            if (homeContent) homeContent.style.display = 'block';
        }
    });
    
    // Also trigger search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            if (query.length > 0) {
                searchResults.style.display = 'block';
                if (homeContent) homeContent.style.display = 'none';
                performSearch(query);
            }
        }
    });
}

function performSearch(query) {
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
        return;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    // Search artists (shown first)
    const artistsResults = document.getElementById('artistsResults');
    if (artistsResults) {
        const filteredArtists = artistsData.filter(artist => 
            artist.name.toLowerCase().includes(lowerQuery)
        );
        
        if (filteredArtists.length > 0) {
            artistsResults.innerHTML = filteredArtists.map(artist => `
                <div class="artist-card" onclick="window.location.href='artist.html?id=${artist.id}'">
                    <img src="${artist.image}" alt="${artist.name}">
                    <h3>${artist.name}</h3>
                </div>
            `).join('');
        } else {
            artistsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">No artists found</p>';
        }
    }

    // Search songs (shown second)
    const songsResults = document.getElementById('songsResults');
    if (songsResults && songsData && songsData.length > 0) {
        const filteredSongs = songsData.filter(song => 
            song && (song.name.toLowerCase().includes(lowerQuery) || 
            song.artist.toLowerCase().includes(lowerQuery))
        );
        
        if (filteredSongs.length > 0) {
            songsResults.innerHTML = filteredSongs.map(song => `
                <div class="song-item" onclick="playSong(${song.id})">
                    <img src="${song.image}" alt="${song.name}">
                    <div class="song-info">
                        <div class="song-name">${song.name}</div>
                        <div class="song-artist">${song.artist}</div>
                    </div>
                    <span class="song-duration">${song.duration}</span>
                </div>
            `).join('');
        } else {
            songsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">No songs found</p>';
        }
    } else if (songsResults) {
        songsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">Loading songs...</p>';
    }

    // Search albums (shown third)
    const albumsResults = document.getElementById('albumsResults');
    if (albumsResults) {
        const filteredAlbums = albumsData.filter(album => 
            album.name.toLowerCase().includes(lowerQuery)
        );
        
        if (filteredAlbums.length > 0) {
            albumsResults.innerHTML = filteredAlbums.map(album => `
                <div class="album-card" onclick="playAlbum(${album.id})">
                    <img src="${album.image}" alt="${album.name}">
                    <h3>${album.name}</h3>
                    <p>${album.desc}</p>
                </div>
            `).join('');
        } else {
            albumsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">No albums found</p>';
        }
    }
    
    // Search playlists (shown last)
    const playlistsResults = document.getElementById('playlistsResults');
    if (playlistsResults && predefinedPlaylists && predefinedPlaylists.length > 0) {
        // Find playlists that match query or contain songs matching query
        const matchingPlaylists = predefinedPlaylists.filter(playlist => {
            // Check if playlist name matches
            if (playlist.name.toLowerCase().includes(lowerQuery)) {
                return true;
            }
            // Check if any song in playlist matches
            if (songsData && songsData.length > 0) {
                const matchingSongs = playlist.songs.filter(songId => {
                    const song = songsData[songId];
                    return song && (
                        song.name.toLowerCase().includes(lowerQuery) ||
                        song.artist.toLowerCase().includes(lowerQuery)
                    );
                });
                return matchingSongs.length > 0;
            }
            return false;
        });
        
        if (matchingPlaylists.length > 0) {
            playlistsResults.innerHTML = matchingPlaylists.map(playlist => `
                <div class="album-card" onclick="openPlaylistView('${playlist.id}')">
                    <img src="${playlist.image}" alt="${playlist.name}">
                    <h3>${playlist.name}</h3>
                    <p>${playlist.songs.length} songs</p>
                </div>
            `).join('');
        } else {
            playlistsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">No playlists found</p>';
        }
    } else if (playlistsResults) {
        playlistsResults.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">Loading playlists...</p>';
    }
}

function loadPlaylists() {
    const playlistsList = document.getElementById('playlistsList');
    if (!playlistsList) return;

    if (playlists.length === 0) {
        playlistsList.innerHTML = '<p style="color: #b3b3b3; padding: 8px; font-size: 14px;">No playlists yet</p>';
        return;
    }

    playlistsList.innerHTML = playlists.map((playlist, index) => `
        <div class="playlist-item" onclick="openPlaylist(${index})">
            ${playlist.name}
        </div>
    `).join('');
}

function openPlaylist(index) {
    // Store current playlist index
    localStorage.setItem('currentPlaylistIndex', index);
    window.location.href = 'add-playlist.html?view=' + index;
}

// Expose function globally
window.openPlaylist = openPlaylist;

