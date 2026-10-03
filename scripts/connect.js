/**
 * ════════════════════════════════════════════════════════════════
 * FRK PRODUCTIONS — CONNECT PAGE
 * Centralized Configuration & Interaction Script
 *
 * To update links, phone numbers, or social handles:
 * Edit the CONFIG object below. No other file needs changing.
 * ════════════════════════════════════════════════════════════════
 */

/* ─── CENTRALIZED CONFIG ─────────────────────────────────────── */
const CONFIG = {
  brand: {
    name: 'FRK Productions',
    tagline: 'Stop Creating Alone.',
    location: 'Pune, India',
  },
  founder: {
    name: 'Farhan Khan',
    role: 'Founder & Community Lead',
    phone: '+919534045196',          // E.164 format for tel: and wa.me links
    phoneDisplay: '+91 95340 45196', // Human-readable
    email: 'devrevolutionx@gmail.com',
  },
  links: {
    website:            'https://frkproductions.netlify.app',
    instagram:          'https://instagram.com/frkproductions.c',
    instagramHandle:    '@frkproductions.c',
    // ↓ Replace PLACEHOLDER_COMMUNITY_LINK with your actual WhatsApp community invite code
    whatsappCommunity:  'https://chat.whatsapp.com/IrOteZX7IYt0IrvtDS6xub',
    whatsappDM:         'https://wa.me/919534045196',
    whatsappCTAMsg:     'Hey%20Farhan%2C%20I%20want%20to%20create%20something%20together%21',
  },
  portfolio: [
    { id: 'work-tokyo-drift',       title: 'TOKYO DRIFT',        cats: 'Automotive · Events',        url: null },
    { id: 'work-frk-creators',      title: 'FRK CREATORS',       cats: 'Community · Creators',       url: null },
    { id: 'work-brand-stories',     title: 'BRAND STORIES',      cats: 'Commercial · Production',    url: null },
    { id: 'work-event-experiences', title: 'EVENT EXPERIENCES',  cats: 'Events · Media',             url: null },
    // To add more: { id: 'work-xxx', title: 'TITLE', cats: 'Cat · Cat', url: 'https://...' }
  ],
};

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.section-header, .link-card, .service-card, .portfolio-card, .contact-identity, .contact-details, .contact-actions, .community-band-inner'
  );

  if (!window.IntersectionObserver) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children slightly
          const delay = (i % 4) * 60;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

/* ─── LINK CARD PRESS EFFECT ─────────────────────────────────── */
(function initPressEffect() {
  const cards = document.querySelectorAll('.link-card, .portfolio-card');

  cards.forEach(card => {
    card.addEventListener('pointerdown', () => {
      card.style.transform = 'scale(0.97)';
    });
    card.addEventListener('pointerup', () => {
      card.style.transform = '';
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ─── PORTFOLIO CARD CLICK ───────────────────────────────────── */
(function initPortfolioCards() {
  CONFIG.portfolio.forEach(item => {
    const el = document.getElementById(item.id);
    if (!el) return;
    if (item.url) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      });
    } else {
      // No URL yet — indicate coming soon on long press / right hover
      el.setAttribute('title', `${item.title} — Coming Soon`);
    }
  });
})();

/* ─── WHATSAPP CTA LINK UPDATE ───────────────────────────────── */
(function patchWhatsAppLinks() {
  // CTA button now scrolls to #connect section, so no override here.

  const communityLinks = [
    document.getElementById('link-whatsapp-community'),
    document.getElementById('cta-join-community'),
  ];
  communityLinks.forEach(el => {
    if (el) el.href = CONFIG.links.whatsappCommunity;
  });

  const waAction = document.getElementById('action-whatsapp');
  if (waAction) waAction.href = CONFIG.links.whatsappDM;
})();

/* ─── SMOOTH SECTION SCROLL (for any internal anchor links) ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── LOG READY ──────────────────────────────────────────────── */
console.log('%cFRK Productions', 'font-size:18px;font-weight:bold;color:#00b4ff;');
console.log('%cStop Creating Alone.', 'font-size:12px;color:#6a6a6a;');
