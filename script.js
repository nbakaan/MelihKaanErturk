// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('active'); // Optional: Add toggle state for menu icon
});

// Smooth Scroll for Links
const navLinks = document.querySelectorAll('.nav a, .btn');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) { // Ensure it's an in-page anchor
      event.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Animated Card Hover Effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)'; // Slightly reduce the scaling for a subtle effect
    card.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.5)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
  });
});

// Highlight Active Section in Navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${currentSection}`) {
      item.classList.add('active');
    }
  });
});

// Add Active Class for Menu Toggle
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});
