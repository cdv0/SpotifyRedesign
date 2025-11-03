// script.js — artist page interactions

// script.js — artist page interactions

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------
  // Legacy .tab support (if any remain)
  // -------------------------------
  const legacyTabs = document.querySelectorAll('.tab');
  if (legacyTabs.length) {
    legacyTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        legacyTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }

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
  const seeMoreBtn = document.querySelector('.see-more-btn');
  if (list && seeMoreBtn) {
    const rows = Array.from(list.querySelectorAll('.song'));
    const VISIBLE = 5;

    if (rows.length <= VISIBLE) {
      seeMoreBtn.style.display = 'none';
    } else {
      rows.forEach((row, i) => { if (i >= VISIBLE) row.style.display = 'none'; });
      seeMoreBtn.addEventListener('click', () => {
        rows.forEach(r => r.style.display = '');
        seeMoreBtn.remove();
      });
    }
  }

  // -------------------------------
  // NEW: Sticky sub-nav interactions
  // -------------------------------
  const subtabs = Array.from(document.querySelectorAll('.subtab'));
  const targets = subtabs
    .map(btn => btn.getAttribute('data-target'))
    .filter(Boolean)
    .map(sel => document.querySelector(sel))
    .filter(Boolean);

  // Smooth scroll on click
  subtabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-target');
      const target = sel ? document.querySelector(sel) : null;
      if (!target) return;

      // Adjust for sticky sub-nav height so titles aren’t hidden
      const subnav = document.querySelector('.artist-subnav');
      const offset = subnav ? subnav.offsetHeight + 8 : 8;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // Scroll-spy: highlight the active subtab based on section in view
  if (targets.length && subtabs.length) {
    const byId = id => subtabs.find(b => b.getAttribute('data-target') === `#${id}`);

    const observer = new IntersectionObserver(
      entries => {
        // pick the entry with greatest intersection ratio
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const id = visible.target.id;
        subtabs.forEach(b => b.classList.remove('is-active'));
        const active = byId(id);
        if (active) active.classList.add('is-active');
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // trigger a bit before center
        threshold: [0.1, 0.25, 0.5, 0.75]
      }
    );

    targets.forEach(sec => observer.observe(sec));
  }
});

      }
    }
  });
  