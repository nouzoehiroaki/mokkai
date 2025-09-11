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

// ローディングアニメーション（CSP対応版）
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const mainSite = document.querySelector('.main-site');
  
  // メインサイトを最初は非表示に
  mainSite.style.display = 'none';
  mainSite.style.opacity = '0';

  // 関数として定義してsetTimeoutに渡す（CSP対応）
  function fadeOutLoading() {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease';
    
    // フェードアウト完了後に削除
    function removeLoading() {
      loadingScreen.remove();
    }
    setTimeout(removeLoading, 500);
  }

  function showMainSite() {
    mainSite.style.display = 'block';
    
    function fadeInMainSite() {
      mainSite.style.transition = 'opacity 4s ease';
      mainSite.style.opacity = '1';
    }
    setTimeout(fadeInMainSite, 100);
  }

  // 3.8秒後にローディング画面をフェードアウト
  setTimeout(fadeOutLoading, 3800);

  // 3.8秒後にメインサイトを表示
  setTimeout(showMainSite, 3800);
});