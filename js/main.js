// HEADER cambia cuando haces scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Animación suave al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "1s";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});


// Efecto hover dinámico en cards (extra pro)
const cards = document.querySelectorAll(".card, .product");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


// WhatsApp botón animado
const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {
  setInterval(() => {
    whatsapp.style.transform = "scale(1.1)";
    setTimeout(() => {
      whatsapp.style.transform = "scale(1)";
    }, 200);
  }, 3000);
}
// MENU MOBILE TOGGLE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}