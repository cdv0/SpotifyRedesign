#!/bin/bash
# Start local web server for Spotify Redesign
echo "🚀 Starting Spotify Redesign Server..."
echo "📍 Server running at: http://localhost:5500"
echo "📂 Open: http://localhost:5500/index.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
cd "$(dirname "$0")"
python3 -m http.server 5500

