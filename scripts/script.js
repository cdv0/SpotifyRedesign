// for tab navigation
// script.js
// This file is used to display the script
// It is used in the script.js file to display the script
// It is also used in the script.js file to display the script
// It is also used in the script.js file to display the script
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// auto-number songs
const songs = document.querySelectorAll(".song");
songs.forEach((song, index) => {
    const number = song.querySelector(".song-number");
    if (number) number.textContent = index + 1;
});
// for tab navigation
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
// Keep active tab centered when scrolling
const tabsWrap = document.getElementById('artistTabs');
function scrollTabIntoView(el){
  if (!tabsWrap || !el) return;
  const wrapRect = tabsWrap.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const offset = elRect.left - wrapRect.left - (wrapRect.width - elRect.width)/2;
  tabsWrap.scrollBy({ left: offset, behavior: 'smooth' });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    scrollTabIntoView(tab);
  });
});

window.addEventListener('load', () => {
  const current = document.querySelector('.artist-tabs .tab.active, .artist-tabs .tab.is-active');
  if (current) scrollTabIntoView(current);
});

// auto-number songs
const songs = document.querySelectorAll(".song");
songs.forEach((song, index) => {
  const number = song.querySelector(".song-number");
  if (number) number.textContent = index + 1;
});

// ===============================
// Back button behavior (added)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const back = document.querySelector('.back-btn');
  if (back) {
    back.addEventListener('click', () => {
      if (history.length > 1) history.back();
      else window.location.href = 'index.html';
    });
  }
});
