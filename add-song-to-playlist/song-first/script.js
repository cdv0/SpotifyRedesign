document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");
  const songButtons = document.querySelectorAll(".song-btn");
  const doneBtn = document.querySelector(".done-btn");
  const modalSongName = document.querySelector(".modal-header h4 span");

  const open = () => modal.classList.add("open");
  const close = () => modal.classList.remove("open");

  songButtons.forEach(btn => btn.addEventListener("click", open));

  songButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const titleEl = btn.querySelector(".song-title");
      if (titleEl && modalSongName) {
        modalSongName.textContent = titleEl.textContent;
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", close);

  // Close modal using shadow
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  if (doneBtn) { doneBtn.addEventListener("click", close); }
});