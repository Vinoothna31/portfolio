// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile menu toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Rotating role text in hero =====
const roles = [
  'Computer Science Engineer',
  'Software Developer',
  'Problem Solver',
  'Lifelong Learner'
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleEl = document.getElementById('roleText');

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ===== Contact form (front-end only placeholder) =====
// NOTE: This form does not send emails by itself. To make it actually
// deliver messages to your inbox, connect it to a free form backend
// like https://formspree.io (see README for the 2-minute setup),
// or replace the submit handler with a mailto link.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:vinoothna.mukkamala@example.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your email app to send this message...';
  form.reset();
});