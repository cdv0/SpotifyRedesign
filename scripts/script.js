// script.js — artist page interactions

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------
    // Tabs: active state toggle
    // -------------------------------
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  
    // -------------------------------
    // Auto-number songs
    // -------------------------------
    const songs = document.querySelectorAll('.song');
    songs.forEach((song, index) => {
      const number = song.querySelector('.song-number');
      if (number) number.textContent = index + 1;
    });
  
    // -------------------------------
    // Back button behavior
    // -------------------------------
    const back = document.querySelector('.back-btn');
    if (back) {
      back.addEventListener('click', () => {
        if (history.length > 1) history.back();
        else window.location.href = 'index.html';
      });
    }
  
    // -------------------------------
    // Optional: collapse songs + "See More"
    // -------------------------------
    const list = document.querySelector('.song-list');
    const btn = document.querySelector('.see-more-btn');
    if (list && btn) {
      const rows = Array.from(list.querySelectorAll('.song'));
      const VISIBLE = 5; // show first 5 by default
  
      if (rows.length <= VISIBLE) {
        btn.style.display = 'none';
      } else {
        // hide the rest initially
        rows.forEach((row, i) => { if (i >= VISIBLE) row.style.display = 'none'; });
  
        btn.addEventListener('click', () => {
          rows.forEach(r => r.style.display = '');
          btn.remove(); // remove button after expansion
        });
      }
    }
  });
  