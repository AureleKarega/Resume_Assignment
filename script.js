
// Toggle navbar menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple form validation
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Please fill in all fields.';
    formResponse.style.color = 'red';
    return;
  }

  formResponse.textContent = 'Message sent successfully!';
  formResponse.style.color = 'green';
  contactForm.reset();
});
