// VORN — main.js

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
reveals.forEach(el => io.observe(el));

// Newsletter
document.getElementById('sub-btn').addEventListener('click', () => {
  const em = document.getElementById('email');
  const btn = document.getElementById('sub-btn');
  if (em && em.value.includes('@')) {
    btn.textContent = 'Suscrito ✓';
    btn.style.background = '#3a3830';
  }
});
