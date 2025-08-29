// main.js

// Contact form and signup form simple validation and success messages
document.addEventListener('DOMContentLoaded', function () {
  // Contact form submission (about.html)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      contactForm.reset();
    });
  }

  // Signup form submission (index.html)
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for signing up!');
      signupForm.reset();
    });
  }
});