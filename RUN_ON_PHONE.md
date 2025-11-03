# How to Run on Your Phone (Mobile Device)

## METHOD 1: Access from Phone on Same WiFi Network

### Step 1: Find Your Computer's IP Address

Run this command in terminal:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1
```

Or on macOS, you can also use:
```bash
ipconfig getifaddr en0
```

This will show your computer's local IP address (looks like: 192.168.1.xxx)

### Step 2: Start the Server

Run this command:
```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && python3 -m http.server 5501 --bind 0.0.0.0
```

The `--bind 0.0.0.0` makes the server accessible from other devices on your network.

### Step 3: Open on Your Phone

1. Make sure your phone is connected to the SAME WiFi network as your computer
2. Open your phone's browser (Safari, Chrome, etc.)
3. Type in the address bar:
   ```
   http://YOUR_IP_ADDRESS:5501/index.html
   ```
   Replace YOUR_IP_ADDRESS with the IP from Step 1
   
   Example: `http://192.168.1.100:5501/index.html`

---

## METHOD 2: Use Browser DevTools Mobile Emulation (Easier)

### Step 1: Start Server (Same as Desktop)
```bash
cd "/Users/krishahemani/Downloads/CECS 448/SpotifyRedesign" && python3 -m http.server 5501
```

### Step 2: Open in Browser
Open: http://localhost:5501/index.html

### Step 3: Enable Mobile View
1. Press F12 (or Cmd+Option+I on Mac) to open DevTools
2. Click the device toggle icon (phone icon) in DevTools toolbar
3. Or press: Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
4. Select "iPhone 15 Pro" from the device dropdown
5. Your browser window will now show the mobile layout

This lets you see exactly how it looks on a phone, but you're still on your computer.

---

## METHOD 3: Simple Mobile Test Script

I'll create a script that finds your IP and gives you the exact URL.

---

## Quick Start for Phone Testing

### Option A: DevTools (Recommended - No WiFi setup needed)
1. Run: `python3 -m http.server 5501`
2. Open: http://localhost:5501/index.html
3. Press F12 → Click device icon → Select "iPhone 15 Pro"

### Option B: Actual Phone (Requires same WiFi)
1. Find IP: `ifconfig | grep "inet " | grep -v 127.0.0.1`
2. Run: `python3 -m http.server 5501 --bind 0.0.0.0`
3. On phone browser: `http://YOUR_IP:5501/index.html`

---

## Troubleshooting

If phone can't connect:
- Make sure phone and computer are on same WiFi
- Check firewall isn't blocking port 5501
- Try disabling firewall temporarily
- Use DevTools method instead (Method 2)

