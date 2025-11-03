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
  const undoBtn = document.querySelector('#modal .undo');
  const statusLine = document.querySelector('#modal .add-song-modal-right p');

  function showInModalNotification(songTitle) {
    if (!notification) return;
    if (selSong) selSong.textContent = songTitle;
    if (statusLine) statusLine.innerHTML = 'Added to <strong>My playlist #1</strong>:';
    if (undoBtn) undoBtn.style.display = 'flex';
    notification.classList.add('open');
    setTimeout(() => notification.classList.remove('open'), 2500);
  }

  songBtnsInModal.forEach(btn => {
    btn.addEventListener('click', () => {
      const songTitle = btn.querySelector('.song-title')?.textContent?.trim() || '';
      showInModalNotification(songTitle);
    });
  });

  if (undoBtn) {
    undoBtn.addEventListener('click', () => {
      if (!notification) return;
      if (statusLine) statusLine.innerHTML = 'Removed from <strong>My playlist #1</strong>:';
      notification.classList.add('open');
      setTimeout(() => notification.classList.remove('open'), 2500);
      undoBtn.style.display = 'none';
    });
  }
});