"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initTypingEffect();
  initMobileMenu();
  renderSkills();
  initContactForm();
});

function initYear() {
  const element = document.getElementById("year");
  if (element) {
    element.textContent = new Date().getFullYear();
  }
}

function initTypingEffect() {
  const element = document.getElementById("typing-text");
  if (!element) {
    return;
  }

  const words = ["Achie", "een ontwikkelaar", "een ICT-student"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];
    const display = deleting
      ? word.substring(0, charIndex - 1)
      : word.substring(0, charIndex + 1);

    element.textContent = display;
    charIndex += deleting ? -1 : 1;

    let delay = deleting ? 50 : 120;

    if (!deleting && display === word) {
      delay = 1500;
      deleting = true;
    } else if (deleting && display === "") {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = isOpen ? "&times;" : "&#9776;";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "&#9776;";
    });
  });
}

function renderSkills() {
  const container = document.getElementById("skills-container");

  if (!container) {
    return;
  }

  const skills = ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Python"];

  container.innerHTML = skills
    .map((skill) => `<span class="skill-tag">${skill}</span>`)
    .join("");
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const naam = form.naam.value.trim();
    const email = form.email.value.trim();
    const bericht = form.bericht.value.trim();

    if (!naam || !email || !bericht) {
      status.textContent = "Vul alle velden in.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Bedankt voor je bericht, " + naam + "! Ik neem snel contact op.";
    status.className = "form-status success";
    form.reset();
  });
}