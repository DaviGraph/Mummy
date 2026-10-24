/**
 * JULIETÉ FASHION ATELIER — MAIN JAVASCRIPT
 * Location: Lagos, Nigeria
 * Functional Requirements:
 * - Dynamic current year in footer
 * - WhatsApp URL generation with encoded prefilled messages
 * - Interactive Contact Modal allowing choice of Line 1 or Line 2
 * - Mobile hamburger menu toggle & backdrop handling
 * - Sticky header with glassmorphism on scroll
 * - Smooth scroll navigation
 * - Image fallback protection
 */

(function () {
  'use strict';

  // --- Brand Configuration & WhatsApp Contacts ---
  const WHATSAPP_CONTACTS = {
    line1: {
      number: '08066327093',
      international: '2348066327093',
      label: 'Line 1 (Julieté Atelier)'
    },
    line2: {
      number: '09040228364',
      international: '2349040228364',
      label: 'Line 2 (Julieté Atelier)'
    }
  };

  const DEFAULT_MESSAGE = "Hello Julieté Fashion Atelier! I would like to enquire about a custom outfit. Please guide me through the process.";

  /**
   * Helper to construct valid, encoded WhatsApp URLs
   * @param {string} phone - International format phone digits
   * @param {string} message - Unencoded text message
   * @returns {string} - Complete WhatsApp direct link
   */
  function buildWhatsAppUrl(phone, message) {
    const encoded = encodeURIComponent(message || DEFAULT_MESSAGE);
    return `https://wa.me/${phone}?text=${encoded}`;
  }

  // --- DOM Elements ---
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const modalOverlay = document.getElementById('whatsappModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalChoiceLine1 = document.getElementById('modalChoiceLine1');
  const modalChoiceLine2 = document.getElementById('modalChoiceLine2');
  const modalMessagePreview = document.getElementById('modalMessagePreview');
  const currentYearElements = document.querySelectorAll('.dynamic-year');

  // --- Dynamic Year ---
  const currentYear = new Date().getFullYear();
  currentYearElements.forEach(el => {
    el.textContent = currentYear;
  });

  // --- Header Scroll State ---
  function updateHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // --- Mobile Navigation Drawer ---
  function openMobileNav() {
    if (!mobileNav || !menuToggle) return;
    menuToggle.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.add('is-visible');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !menuToggle) return;
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove('is-visible');
    }
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // --- WhatsApp Contact Modal Management ---
  let activeCustomMessage = DEFAULT_MESSAGE;

  /**
   * Opens the WhatsApp choice modal with an optional prefilled message
   * @param {string} customMessage
   */
  function openWhatsAppModal(customMessage) {
    activeCustomMessage = customMessage || DEFAULT_MESSAGE;

    if (modalMessagePreview) {
      modalMessagePreview.textContent = `"${activeCustomMessage}"`;
    }

    if (modalChoiceLine1) {
      modalChoiceLine1.href = buildWhatsAppUrl(WHATSAPP_CONTACTS.line1.international, activeCustomMessage);
    }
    if (modalChoiceLine2) {
      modalChoiceLine2.href = buildWhatsAppUrl(WHATSAPP_CONTACTS.line2.international, activeCustomMessage);
    }

    if (modalOverlay) {
      modalOverlay.classList.add('is-open');
      modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus first action for accessibility
      if (modalChoiceLine1) {
        setTimeout(() => modalChoiceLine1.focus(), 100);
      }
    }
  }

  function closeWhatsAppModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeWhatsAppModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeWhatsAppModal();
      }
    });
  }

  // Close modals or drawers on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('is-open')) {
        closeWhatsAppModal();
      }
      if (mobileNav && mobileNav.classList.contains('is-open')) {
        closeMobileNav();
      }
    }
  });

  // --- Attach Modal Triggers across the page ---
  // Elements with data-whatsapp-trigger attribute open modal
  const modalTriggers = document.querySelectorAll('[data-open-modal="whatsapp"]');
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const message = trigger.getAttribute('data-message') || DEFAULT_MESSAGE;
      openWhatsAppModal(message);
    });
  });

  // --- Graceful Image Fallback ---
  const allImages = document.querySelectorAll('img[data-fallback-title]');
  allImages.forEach(img => {
    img.addEventListener('error', function () {
      const parent = this.parentElement;
      const title = this.getAttribute('data-fallback-title') || 'Julieté Fashion Atelier';
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'image-fallback';
      fallbackDiv.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
        <span>${title}</span>
        <small style="color: var(--color-champagne); opacity: 0.85;">Lagos, Nigeria</small>
      `;
      this.style.display = 'none';
      parent.appendChild(fallbackDiv);
    });
  });

  // Expose function globally if needed
  window.JulieteAtelier = {
    openWhatsAppModal,
    closeWhatsAppModal,
    buildWhatsAppUrl,
    contacts: WHATSAPP_CONTACTS
  };

})();
