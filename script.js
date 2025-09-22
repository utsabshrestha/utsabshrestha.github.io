// Theme toggle with persistence
(function () {
  const root = document.documentElement;
  const key = 'theme';
  const stored = localStorage.getItem(key);
  if (stored) root.setAttribute('data-theme', stored);

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem(key, next);
    });
  }
})();

// Mobile nav toggle
(function () {
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!menuBtn || !nav) return;
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
})();

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
(function () {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
