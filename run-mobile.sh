#!/bin/bash

# Spotify Redesign - Mobile Access Script
# Starts server accessible from phone on same WiFi network

cd "$(dirname "$0")"

echo "=========================================="
echo "Spotify Redesign - Mobile Access"
echo "=========================================="
echo ""

# Kill any existing servers
lsof -ti:5501,8000,5500 2>/dev/null | xargs kill -9 2>/dev/null

# Get local IP address
IP_ADDRESS=$(ipconfig getifaddr en0 2>/dev/null || ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

if [ -z "$IP_ADDRESS" ]; then
    echo "Could not detect IP address. Starting server on localhost only."
    echo "For phone access, manually find your IP and use: python3 -m http.server 5501 --bind 0.0.0.0"
    IP_ADDRESS="localhost"
    BIND_ADDRESS="127.0.0.1"
else
    echo "Your computer's IP address: $IP_ADDRESS"
    echo ""
    echo "Phone access URL:"
    echo "  http://$IP_ADDRESS:5501/index.html"
    echo ""
    BIND_ADDRESS="0.0.0.0"
fi

echo "Starting server on port 5501..."
echo "Server will be accessible from devices on your WiFi network"
echo ""
echo "To access on your phone:"
echo "1. Make sure phone is on SAME WiFi network"
echo "2. Open browser on phone"
echo "3. Go to: http://$IP_ADDRESS:5501/index.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Start server accessible from network
python3 -m http.server 5501 --bind "$BIND_ADDRESS"

