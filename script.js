// DOM Elements
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const toggleIndicator = document.querySelector('.toggle-indicator');
const featuresGroups = document.querySelectorAll('.features-group');
const navLinks = document.querySelectorAll('.navbar-link, .mobile-link');
const langBtns = document.querySelectorAll('.lang-btn');

// Scroll Progress Bar
function updateScrollProgress() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
}

// Navbar Scroll Effect
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    scrollTopBtn.style.display = 'flex';
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.style.display = 'none';
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const isOpen = mobileMenu.style.display === 'block';
  mobileMenu.style.display = isOpen ? 'none' : 'block';
  
  const icon = mobileMenuBtn.querySelector('i');
  icon.className = isOpen ? 'fas fa-bars' : 'fas fa-times';
}

// Features Toggle
function toggleFeatures(target) {
  // Update buttons
  toggleBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Move indicator
  const isProvider = target === 'provider';
  toggleIndicator.style.transform = isProvider ? 'translateX(100%)' : 'translateX(0)';
  
  // Show/hide feature groups
  featuresGroups.forEach(group => {
    group.classList.remove('show');
    if (group.id === target) {
      group.classList.add('show');
    }
  });
}

// Smooth Scrolling for Navigation Links
function handleNavClick(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  
  if (targetId.startsWith('#')) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      mobileMenu.style.display = 'none';
      const icon = mobileMenuBtn.querySelector('i');
      icon.className = 'fas fa-bars';
    }
  }
}

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Language Toggle
function changeLanguage(lang) {
  // Update active language button
  langBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Store language preference
  localStorage.setItem('preferred-language', lang);
  
  // Update content using i18n
  if (window.i18n) {
    window.i18n.changeLanguage(lang);
  }
}

// Intersection Observer for Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.stat-item, .metric-card, .step-item, .benefit-card, .feature-card, .testimonial-card, .pricing-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Typing Effect for Hero Title
function initTypingEffect() {
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    const text = typedElement.textContent;
    typedElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typedElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
  }
}

// Form Submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
    e.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Video Play Button
function initVideoPlayer() {
  const videoPlayBtn = document.querySelector('.video-play-btn');
  const videoPlaceholder = document.querySelector('.video-placeholder');
  
  if (videoPlayBtn && videoPlaceholder) {
    videoPlayBtn.addEventListener('click', () => {
      // Here you would typically open a modal with the actual video
      alert('Video demo coming soon!');
    });
  }
}

// Parallax Effect for Hero Background
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroBg.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Initialize Everything
function init() {
  // Load saved language preference
  const savedLang = localStorage.getItem('preferred-language') || 'es';
  changeLanguage(savedLang);
  
  // Initialize animations and effects
  initScrollAnimations();
  initTypingEffect();
  initVideoPlayer();
  initParallax();
  
  // Event Listeners
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    handleNavbarScroll();
    updateActiveNavLink();
  });
  
  scrollTopBtn.addEventListener('click', scrollToTop);
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  
  // Features toggle
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target.getAttribute('data-target');
      toggleFeatures(target);
    });
  });
  
  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });
  
  // Language buttons
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
  
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
      const icon = mobileMenuBtn.querySelector('i');
      icon.className = 'fas fa-bars';
    }
  });
  
  // Smooth scroll for CTA buttons
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleNavClick);
  });
}

// Start when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}