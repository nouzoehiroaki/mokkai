// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

// Page transition system
let currentPage = 'home';
const pages = document.querySelectorAll('.page-section');
const menuLinks = document.querySelectorAll('[data-page]');

function showPage(targetPage) {
  if (targetPage === currentPage) return;

  const currentSection = document.getElementById(currentPage);
  const targetSection = document.getElementById(targetPage);

  // Add prev class to current page
  currentSection.classList.add('prev');
  currentSection.classList.remove('active');

  // Show target page
  setTimeout(() => {
    targetSection.classList.add('active');
    targetSection.classList.remove('prev');

    // Clean up prev class after animation
    setTimeout(() => {
      currentSection.classList.remove('prev');
    }, 800);
  }, 100);

  currentPage = targetPage;

  // Close menu
  hamburger.classList.remove('active');
  menuOverlay.classList.remove('active');
}

// Add click events to menu links
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute('data-page');
    showPage(targetPage);
  });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('お問い合わせありがとうございます。後日担当者よりご連絡いたします。');
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
  }
});