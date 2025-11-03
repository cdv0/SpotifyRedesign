#!/bin/bash

# Spotify Redesign - Auto Start Script
# This script starts the server and opens the browser

cd "$(dirname "$0")"

echo "Starting Spotify Redesign Server..."
echo ""

# Kill any existing servers on common ports
lsof -ti:5501,8000,5500 2>/dev/null | xargs kill -9 2>/dev/null

# Start server on port 5501
echo "Server starting on port 5501..."
python3 -m http.server 5501 > /dev/null 2>&1 &
SERVER_PID=$!

# Wait for server to start
sleep 2

# Check if server started successfully
if kill -0 $SERVER_PID 2>/dev/null; then
    echo "Server is running!"
    echo ""
    echo "Opening browser..."
    echo "URL: http://localhost:5501/index.html"
    echo ""
    
    # Open browser (works on macOS)
    open "http://localhost:5501/index.html" 2>/dev/null || \
    xdg-open "http://localhost:5501/index.html" 2>/dev/null || \
    start "http://localhost:5501/index.html" 2>/dev/null || \
    echo "Please open http://localhost:5501/index.html in your browser"
    
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    # Wait for Ctrl+C
    trap "kill $SERVER_PID 2>/dev/null; exit" INT
    wait $SERVER_PID
else
    echo "Error: Could not start server"
    echo "Try running manually: python3 -m http.server 5501"
    exit 1
fi

