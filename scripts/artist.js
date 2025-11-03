// Sample artist and album data
const artistsData = [
    {
        id: 0,
        name: "Arctic Monkeys",
        image: "assets/img1.jpg",
        followers: "52 M monthly listeners",
        albums: [
            { id: 0, name: "AM", image: "assets/img1.jpg", year: 2013, type: "album", deluxe: false },
            { id: 1, name: "AM (Deluxe)", image: "assets/img2.jpg", year: 2013, type: "deluxe", deluxe: true },
            { id: 2, name: "Favorite Worst Nightmare", image: "assets/img3.jpg", year: 2007, type: "album", deluxe: false },
            { id: 3, name: "Whatever People Say I Am, That's What I'm Not", image: "assets/img4.jpg", year: 2006, type: "album", deluxe: false },
            { id: 4, name: "Humbug", image: "assets/img5.jpg", year: 2009, type: "album", deluxe: false },
            { id: 5, name: "Suck It and See", image: "assets/img6.jpg", year: 2011, type: "album", deluxe: false }
        ],
        popularReleases: [
            { id: 0, name: "AM", image: "assets/img1.jpg", year: 2013 },
            { id: 2, name: "Favorite Worst Nightmare", image: "assets/img3.jpg", year: 2007 },
            { id: 3, name: "Whatever People Say I Am, That's What I'm Not", image: "assets/img4.jpg", year: 2006 }
        ]
    },
    {
        id: 1,
        name: "Taylor Swift",
        image: "assets/img2.jpg",
        followers: "100M monthly listeners",
        albums: [
            { id: 10, name: "Midnights", image: "assets/img7.jpg", year: 2022, type: "album", deluxe: false },
            { id: 11, name: "Midnights (Deluxe)", image: "assets/img8.jpg", year: 2022, type: "deluxe", deluxe: true },
            { id: 12, name: "folklore", image: "assets/img9.jpg", year: 2020, type: "album", deluxe: false }
        ],
        popularReleases: [
            { id: 10, name: "Midnights", image: "assets/img7.jpg", year: 2022 },
            { id: 12, name: "folklore", image: "assets/img9.jpg", year: 2020 }
        ]
    },
    {
        id: 2,
        name: "The Weeknd",
        image: "assets/img10.jpg",
        followers: "50M monthly listeners",
        albums: [
            { id: 20, name: "Dawn FM", image: "assets/img11.jpg", year: 2022, type: "album", deluxe: false },
            { id: 21, name: "After Hours", image: "assets/img12.jpg", year: 2020, type: "album", deluxe: false }
        ],
        popularReleases: [
            { id: 20, name: "Dawn FM", image: "assets/img11.jpg", year: 2022 },
            { id: 21, name: "After Hours", image: "assets/img12.jpg", year: 2020 }
        ]
    }
];

let currentArtist = null;
let showingAllAlbums = false;
let currentView = 'popular'; // 'popular' or 'all'

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('id');
    
    if (artistId !== null) {
        loadArtist(parseInt(artistId));
    } else {
        // Default to first artist
        loadArtist(0);
    }
    
    setupViewAllButton();
});

function loadArtist(artistId) {
    currentArtist = artistsData.find(a => a.id === artistId);
    if (!currentArtist) {
        console.error('Artist not found');
        return;
    }
    
    // Update artist header
    updateArtistHeader();
    
    // Load popular releases
    loadPopularReleases();
    
    // Load all albums (initially hidden)
    loadAllAlbums();
}

function updateArtistHeader() {
    if (!currentArtist) return;
    
    const artistImage = document.getElementById('artistImage');
    const artistName = document.getElementById('artistName');
    const artistFollowers = document.getElementById('artistFollowers');
    
    if (artistImage) artistImage.src = currentArtist.image;
    if (artistName) artistName.textContent = currentArtist.name;
    if (artistFollowers) {
        // Format: "52 M monthly listeners" or "100M monthly listeners"
        const followersText = currentArtist.followers.includes('monthly') 
            ? currentArtist.followers 
            : currentArtist.followers + ' monthly listeners';
        artistFollowers.textContent = followersText;
    }
}

function loadPopularReleases() {
    if (!currentArtist) return;
    
    const popularSection = document.getElementById('popularReleases');
    if (!popularSection) return;
    
    // Show top 3-4 popular albums as preview
    const topAlbums = currentArtist.popularReleases.slice(0, 4);
    
    if (topAlbums.length === 0) {
        popularSection.innerHTML = '<p style="color: #b3b3b3; padding: 16px;">No albums available</p>';
        return;
    }
    
    popularSection.innerHTML = topAlbums.map(album => {
        const fullAlbum = currentArtist.albums.find(a => a.id === album.id) || album;
        return `
            <div class="album-list-item" onclick="playAlbum(${album.id})">
                <img src="${album.image}" alt="${album.name}">
                <div class="album-list-info">
                    <div class="album-list-name">${album.name}</div>
                    <div class="album-list-meta">${album.year} • Album</div>
                </div>
            </div>
        `;
    }).join('');
}

function loadAllAlbums() {
    if (!currentArtist) return;
    
    const allAlbumsSection = document.getElementById('allAlbums');
    if (!allAlbumsSection) return;
    
    // Sort albums by year (newest first)
    const sortedAlbums = [...currentArtist.albums].sort((a, b) => b.year - a.year);
    
    // Group albums by base name (to handle deluxe versions)
    const groupedAlbums = {};
    
    sortedAlbums.forEach(album => {
        const baseName = album.name.replace(' (Deluxe)', '').replace(' (Deluxe Edition)', '');
        if (!groupedAlbums[baseName]) {
            groupedAlbums[baseName] = [];
        }
        groupedAlbums[baseName].push(album);
    });
    
    // Convert to list format matching Figma
    allAlbumsSection.innerHTML = Object.entries(groupedAlbums).map(([baseName, albums]) => {
        const mainAlbum = albums.find(a => !a.deluxe) || albums[0];
        const hasDeluxe = albums.some(a => a.deluxe);
        const deluxeAlbum = albums.find(a => a.deluxe);
        
        if (hasDeluxe && deluxeAlbum) {
            // Show album with deluxe toggle
            return `
                <div class="album-with-deluxe" onclick="playAlbum(${mainAlbum.id})">
                    <img src="${mainAlbum.image}" alt="${baseName}" style="width: 80px; height: 80px; border-radius: 4px; object-fit: cover;">
                    <div class="album-list-info">
                        <div class="album-list-name">${baseName}</div>
                        <div class="album-list-meta">${mainAlbum.year} • Album</div>
                    </div>
                    <div class="album-type-selector" onclick="event.stopPropagation()">
                        <button class="album-type-btn ${!mainAlbum.deluxe ? 'active' : ''}" onclick="selectAlbumType('${baseName}', false)">
                            Album
                        </button>
                        <button class="album-type-btn ${mainAlbum.deluxe ? 'active' : ''}" onclick="selectAlbumType('${baseName}', true)">
                            Deluxe
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Regular album, no deluxe version
            return `
                <div class="album-list-item" onclick="playAlbum(${mainAlbum.id})">
                    <img src="${mainAlbum.image}" alt="${mainAlbum.name}">
                    <div class="album-list-info">
                        <div class="album-list-name">${mainAlbum.name}</div>
                        <div class="album-list-meta">${mainAlbum.year} • Album</div>
                    </div>
                </div>
            `;
        }
    }).join('');
}

function setupViewAllButton() {
    const viewAllBtn = document.getElementById('viewAllAlbumsBtn');
    const allAlbumsSection = document.getElementById('allAlbumsSection');
    const popularSectionEl = document.getElementById('popularReleasesSection');
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            showingAllAlbums = !showingAllAlbums;
            
            if (showingAllAlbums) {
                // Show all albums section, hide popular
                if (allAlbumsSection) {
                    allAlbumsSection.style.display = 'block';
                    // Scroll to all albums section
                    setTimeout(() => {
                        allAlbumsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
                if (popularSectionEl) popularSectionEl.style.display = 'none';
            } else {
                // Show popular section, hide all albums
                if (allAlbumsSection) allAlbumsSection.style.display = 'none';
                if (popularSectionEl) {
                    popularSectionEl.style.display = 'block';
                    // Scroll to popular section
                    setTimeout(() => {
                        popularSectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        });
    }
}

function selectAlbumType(baseName, isDeluxe) {
    // Find the album by base name and deluxe status
    const album = currentArtist.albums.find(a => {
        const albumBaseName = a.name.replace(' (Deluxe)', '').replace(' (Deluxe Edition)', '');
        return albumBaseName === baseName && a.deluxe === isDeluxe;
    });
    
    if (album) {
        playAlbum(album.id);
    }
}

function playAlbum(albumId) {
    console.log('Playing album:', albumId);
    // This would integrate with the main player
}

function toggleView() {
    const popularSection = document.getElementById('popularReleasesSection');
    const allAlbumsSection = document.getElementById('allAlbumsSection');
    
    showingAllAlbums = !showingAllAlbums;
    
    if (showingAllAlbums) {
        // Show all albums, hide popular
        if (allAlbumsSection) {
            allAlbumsSection.style.display = 'block';
            setTimeout(() => {
                allAlbumsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        if (popularSection) popularSection.style.display = 'none';
    } else {
        // Show popular, hide all albums
        if (popularSection) {
            popularSection.style.display = 'block';
            setTimeout(() => {
                popularSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        if (allAlbumsSection) allAlbumsSection.style.display = 'none';
    }
}

