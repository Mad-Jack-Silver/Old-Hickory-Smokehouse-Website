/* ============================================
   M&M Old Hickory Smokehouse BBQ
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Preloader ---
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hidePreloader = () => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.style.display = 'none';
        }
      }, 500);
    };

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 1500); // Safety fallback
  }

  // --- Header Sticky Shadow ---
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile Navigation Drawer ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle && navMenu) {
    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    };

    const closeMenu = () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- Highlight Active Page Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      if (!link.classList.contains('nav-cta')) {
        link.classList.add('active');
      }
    }
  });

  // --- Back to Top Button ---
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 350);
    }, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll-Triggered Fade-In Animations ---
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (animatedElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

      animatedElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      animatedElements.forEach(el => el.classList.add('visible'));
    }
  }

  // --- Animated Numbers Counter ---
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1800;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepValue = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              el.textContent = prefix + target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
            }
          }, stepTime);

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // --- Menu Category Live Filter ---
  const catBtns = document.querySelectorAll('.menu-cat-btn, .filter-btn');
  const menuCards = document.querySelectorAll('.menu-card[data-category]');
  const menuSections = document.querySelectorAll('.menu-section[data-category]');

  if (catBtns.length > 0) {
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;

        // Filter individual cards if present
        if (menuCards.length > 0) {
          menuCards.forEach(card => {
            if (cat === 'all' || card.dataset.category === cat) {
              card.style.display = '';
              card.style.opacity = '1';
            } else {
              card.style.display = 'none';
            }
          });
        }

        // Filter category sections if present
        if (menuSections.length > 0) {
          menuSections.forEach(section => {
            if (cat === 'all' || section.dataset.category === cat) {
              section.style.display = '';
            } else {
              section.style.display = 'none';
            }
          });
        }
      });
    });
  }

  // --- Contact Form Submission Simulation ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending Message...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Message Received! We will be in touch.';
        btn.style.background = '#06C167';
        btn.style.borderColor = '#06C167';
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // --- Catering Form Submission Simulation ---
  const cateringForm = document.getElementById('cateringForm');
  if (cateringForm) {
    cateringForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = cateringForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Submitting Request...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Catering Request Received! We will contact you shortly.';
        btn.style.background = '#06C167';
        btn.style.borderColor = '#06C167';
        cateringForm.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // --- Newsletter Form Submission ---
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#06C167';
      form.querySelector('input').value = '';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3500);
    });
  });

  // --- Highlight Today's Hours in Hours Table ---
  const hoursRows = document.querySelectorAll('.hours-row');
  if (hoursRows.length > 0) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days[new Date().getDay()];
    hoursRows.forEach(row => {
      if (row.dataset.day === currentDay) {
        row.classList.add('today');
      }
    });
  }

});
