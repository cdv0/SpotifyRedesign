# Mobile Preview Guide

## 🚀 How to View Mobile Layout

### Option 1: Browser DevTools (Easiest)
1. **Open your site**: http://localhost:5501/index.html
2. **Press F12** (or **Cmd+Option+I** on Mac) to open DevTools
3. **Click the device icon** (📱) in the top-left of DevTools, or press **Cmd+Shift+M**
4. **Select "iPhone 15 Pro"** from the device dropdown
5. Your site will now show the **mobile layout**!

---

## 📱 Mobile Layout Features

### **Mobile Navigation**
- **Bottom Navigation Bar**: Always visible at bottom
  - Home icon + label
  - Search icon + label  
  - Create icon + label
- **Hamburger Menu** (☰): Top-left button opens sidebar
- **Back Button** (←): On artist and playlist pages

### **Mobile Layout Changes**

#### **Home Page (Mobile)**
- Sidebar hidden (slide-in from left when hamburger clicked)
- Bottom nav bar visible
- 2-column grid for albums/songs
- Compact search bar
- Smaller text sizes
- Touch-friendly buttons

#### **Playlist Page (Mobile)**
- Back button in header
- Full-width "Add songs to playlist" button
- Modal takes full screen
- Bottom nav visible
- Compact player above bottom nav

#### **Artist Page (Mobile)**
- Artist image centered, smaller size
- Artist name smaller font (28px)
- "View All Albums" button full-width
- Album lists in vertical scrollable format
- 2-column album grid when viewing all

#### **Player (Mobile)**
- Positioned above bottom nav bar
- Stacked vertically (song info → controls → progress)
- Volume control hidden
- Smaller icons and buttons
- Height: 72px (compact)

---

## 🎨 Mobile Visual Guide

### **Breakpoints:**
- **Mobile**: 0-414px (iPhone 15 Pro)
- **Tablet**: 769-1024px
- **Desktop**: 1025px+

### **Mobile-Specific Elements:**

```
┌─────────────────────────┐
│  ☰  [Search Bar]  🔔   │ ← Header (hamburger, search, bell)
├─────────────────────────┤
│                         │
│      Main Content       │
│    (Full width, no     │
│     sidebar margin)     │
│                         │
│                         │
├─────────────────────────┤
│  [Song Info] [Controls] │ ← Player (above bottom nav)
├─────────────────────────┤
│ 🏠    🔍    ➕          │ ← Bottom Navigation Bar
│ Home  Search  Create    │
└─────────────────────────┘
```

---

## 📋 Quick Test Checklist

### **Home Page**
- [ ] Hamburger menu opens sidebar
- [ ] Bottom nav visible with 3 tabs
- [ ] Albums show in 2-column grid
- [ ] Search bar fits full width
- [ ] Content has no left margin (sidebar hidden)

### **Playlist Page**
- [ ] Back button visible in header
- [ ] "Add songs to playlist" button prominent
- [ ] Modal opens full-screen
- [ ] Confirmation toast appears at bottom
- [ ] Bottom nav still visible

### **Artist Page**
- [ ] Artist image centered
- [ ] "View All Albums" button full-width
- [ ] Albums in vertical list format
- [ ] Bottom nav visible
- [ ] Player above bottom nav

---

## 🔧 Test Commands

```bash
# Start server
python3 -m http.server 5501

# Then open: http://localhost:5501/index.html
# Use DevTools device emulation to see mobile view
```

---

## 💡 Tips

1. **Chrome DevTools**: Best for mobile emulation
   - Right-click → Inspect → Toggle device toolbar
   - Select "iPhone 15 Pro" preset

2. **Safari**: Also supports responsive design mode
   - Develop menu → Enter Responsive Design Mode

3. **Touch Testing**: 
   - Use DevTools to simulate touch
   - Test button sizes (should be 44px+ for easy tapping)

4. **Responsive Testing**:
   - Resize browser window to see breakpoints
   - Mobile: < 414px width
   - Tablet: 414-1024px
   - Desktop: > 1024px

---

## 🎯 Key Mobile Features

✅ **Bottom Navigation Bar** - Always accessible
✅ **Hamburger Menu** - Hidden sidebar, slides in
✅ **Touch-Friendly Buttons** - Larger tap targets
✅ **Compact Layout** - Optimized for small screens
✅ **Stacked Player** - Vertical layout above nav
✅ **Full-Width Modals** - Better mobile experience
✅ **Responsive Grids** - 2 columns on mobile
✅ **Back Button** - Easy navigation

---

**Need help?** Open DevTools and use device emulation to see exactly how it looks on iPhone 15 Pro!


