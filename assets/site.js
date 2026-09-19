
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.nav-item > button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 980) btn.parentElement.classList.toggle('open');
    });
  });

  const shareBtn = document.querySelector('[data-share]');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const data = {
        title: 'iTECH 2026',
        text: '6th International Collaboration on Technology 2026',
        url: window.location.href
      };
      if (navigator.share) {
        try { await navigator.share(data); return; } catch(e) {}
      }
      try {
        await navigator.clipboard.writeText(window.location.href);
        const old = shareBtn.textContent;
        shareBtn.textContent = 'Link copied';
        setTimeout(()=>shareBtn.textContent=old, 1600);
      } catch(e) {
        alert('Copy this page address from your browser to share iTECH 2026.');
      }
    });
  }
});
