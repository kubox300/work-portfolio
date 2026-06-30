const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

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

setInterval(changeRole, 1800);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const closeBtn = document.getElementById('close');

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.card').forEach((card) => {
  const img = card.querySelector('img');
  if (!img) return;

  card.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxTitle.textContent = card.dataset.title || img.alt || '';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

if (closeBtn) {
  closeBtn.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
