const cursor = document.querySelector('.cursor-dot');
if (cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  document.querySelectorAll('a, button, .card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });
}

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

const quotes = [
  'Design is thinking made visual.',
  'Less noise, more meaning.',
  'Create with purpose.',
  'Good design feels effortless.',
  'Details make the difference.',
  'Clean visuals. Clear message.'
];
const navQuote = document.getElementById('navQuote');
if (navQuote) navQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

const roles = ['Graphic Designer', 'Logo Designer', 'Photo Editor', 'Web Designer', 'Brand Designer', 'Creative Designer'];
const roleText = document.getElementById('roleText');
let roleIndex = 0;
if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.style.animation = 'none';
    roleText.offsetHeight;
    roleText.textContent = roles[roleIndex];
    roleText.style.animation = 'roleSwap .65s ease';
  }, 2600);
}

const tooltip = document.getElementById('skillTooltip');
const tooltipTitle = tooltip?.querySelector('h3');
const tooltipDesc = tooltip?.querySelector('p');
if (tooltip) {
  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      tooltipTitle.textContent = pill.dataset.title;
      tooltipDesc.textContent = pill.dataset.desc;
      tooltip.classList.add('active');
    });
    pill.addEventListener('mousemove', (e) => {
      const pad = 18;
      let x = e.clientX + pad;
      let y = e.clientY + pad;
      const rect = tooltip.getBoundingClientRect();
      if (x + rect.width > window.innerWidth - 12) x = e.clientX - rect.width - pad;
      if (y + rect.height > window.innerHeight - 12) y = e.clientY - rect.height - pad;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    });
    pill.addEventListener('mouseleave', () => tooltip.classList.remove('active'));
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxTools = document.getElementById('lightbox-tools');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTitle.textContent = card.dataset.project || card.querySelector('h3')?.textContent || '';
    lightboxTools.textContent = card.dataset.tools || '';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
}
if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
