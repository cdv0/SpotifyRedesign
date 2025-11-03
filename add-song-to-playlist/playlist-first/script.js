document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-modal");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

  // click on backdrop to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const songBtnsInModal = document.querySelectorAll('#modal .song-btn');
  const notification = document.querySelector('#modal .song-added');
  const selSong = document.getElementById('selected-song');

  function showInModalNotification(songTitle) {
    if (!notification) return;
    if (selSong) selSong.textContent = songTitle;
    notification.classList.add('open');
    setTimeout(() => notification.classList.remove('open'), 2200);
  }

  songBtnsInModal.forEach(btn => {
    btn.addEventListener('click', () => {
      const songTitle = btn.querySelector('.song-title')?.textContent?.trim() || '';
      showInModalNotification(songTitle);
    });
  });
});