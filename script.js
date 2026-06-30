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

const roles = [
  'Graphic Designer',
  'Logo Designer',
  'Photo Editor',
  'Web Designer',
  'Brand Designer',
  'Creative Designer'
];

const roleSwitch = document.getElementById('roleSwitch');
let roleIndex = 0;

function changeRole() {
  if (!roleSwitch) return;
  roleIndex = (roleIndex + 1) % roles.length;
  roleSwitch.classList.remove('change');
  void roleSwitch.offsetWidth;
  roleSwitch.textContent = roles[roleIndex];
  roleSwitch.classList.add('change');
}

if (roleSwitch) {
  roleSwitch.textContent = roles[0];
  // Wait until the intro animation is finished before the first role changes.
  // This prevents the hero from feeling like it loads in two separate parts.
  setTimeout(() => {
    changeRole();
    setInterval(changeRole, 2300);
  }, 1100);
}

// Skill tooltip is handled with CSS so it always stays attached to the hovered pill.

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
