// Mobile menu toggle
function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.remove('open');
    });
  });

  // Mark active nav link based on current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page], .mobile-menu a[data-page]').forEach(el => {
    if (el.dataset.page === path) el.classList.add('active');
  });

  // Scroll reveal for sections and cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
