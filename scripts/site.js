document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin',
    `<button id="btn--theme-toggle" aria-label="Alternar tema" title="Alternar tema">
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    </button>`);
  document.body.insertAdjacentHTML('beforeend',
    '<a id="btn--to-top" href="#" aria-label="Voltar ao topo">↑</a>');

  document.getElementById('btn--theme-toggle').addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  const toTop = document.getElementById('btn--to-top');
  window.addEventListener('scroll',
    () => toTop.classList.toggle('visible', window.scrollY > 300),
    { passive: true });
});
