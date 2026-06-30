const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".card img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
const words = [
  "Graphic Designer",
  "Logo Designer",
  "Brand Designer",
  "Photo Editor",
  "Web Designer",
  "Creative Designer"
];

const typing = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const current = words[wordIndex];

  if (!deleting) {

    typing.textContent = current.substring(0, charIndex++);

    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1600);
      return;
    }

  } else {

    typing.textContent = current.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();
