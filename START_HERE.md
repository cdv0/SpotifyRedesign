# How to Run Spotify Redesign

## OPTION 1: Automatic (Opens Browser Automatically)

Copy and paste this command in your terminal:

```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && ./run.sh
```

This will:
1. Start the server
2. Open your browser automatically
3. Show the website at http://localhost:5501/index.html

---

## OPTION 2: Manual (You Open Browser)

Copy and paste this command in your terminal:

```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && python3 -m http.server 5501
```

Then manually open: **http://localhost:5501/index.html**

---

## OPTION 3: If Port is Busy

```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && python3 -m http.server 8000
```

Then open: **http://localhost:8000/index.html**

---

## After Running

The website will be available at:
- Home: http://localhost:5501/index.html
- Playlist: http://localhost:5501/add-playlist.html
- Artist: http://localhost:5501/artist.html
- Podcast: http://localhost:5501/podcast.html

---

## To Stop Server

Press **Ctrl+C** in the terminal

---

## Quick Copy-Paste Command (Recommended)

```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && ./run.sh
```

