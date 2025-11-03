# Quick Start Guide - Spotify Redesign

## 🚀 Run the Project

### Method 1: Simple Script (Recommended)
```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign"
./start-server.sh
```
Then open: **http://localhost:5500/index.html**

---

### Method 2: Python Server (If Method 1 doesn't work)
```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign"
python3 -m http.server 5500
```
Then open: **http://localhost:5500/index.html**

---

### Method 3: Node.js (if you have Node installed)
```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign"
npx http-server -p 5500 --cors -c-1
```
Then open: **http://localhost:5500/index.html**

---

### Method 4: VS Code Live Server (Auto-reload on save)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Page auto-reloads when you save files!

---

## 📱 Test Pages

- **Home**: http://localhost:5500/index.html
- **Create Playlist**: http://localhost:5500/add-playlist.html
- **Artist Page**: http://localhost:5500/artist.html
- **Podcast**: http://localhost:5500/podcast.html

---

## 🛑 Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## ✨ Quick Test Checklist

1. ✅ **Home Page** - Search works (Artists → Songs → Albums)
2. ✅ **Playlist** - Create playlist → Add songs → See confirmation
3. ✅ **Artist** - Click "View All Albums" button
4. ✅ **Player** - Toggle Streaming/Downloaded state

---

## 💡 Tips

- The server runs in the background
- Keep the terminal window open while testing
- Refresh the browser to see changes (unless using Live Server)

