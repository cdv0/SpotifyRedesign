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