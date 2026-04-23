/* ============================================
   CALLE CINCO DRIVING SCHOOL — SHARED JS
   ============================================ */

// Load partials (header + footer) into the page
async function loadPartials() {
    const headerEl = document.getElementById('header-placeholder');
    const footerEl = document.getElementById('footer-placeholder');

    try {
        if (headerEl) {
            const res = await fetch('partials/header.html');
            if (res.ok) {
                headerEl.innerHTML = await res.text();
                initHeader();
            }
        }
        if (footerEl) {
            const res = await fetch('partials/footer.html');
            if (res.ok) {
                footerEl.innerHTML = await res.text();
            }
        }
    } catch (e) {
        console.error('Failed to load partials:', e);
    }
}

// Initialize header behaviour after partial is injected
function initHeader() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const cta = document.getElementById('cta-button');

    // Mobile menu toggle
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            this.classList.toggle('menu-open');
        });
    }

    // Navbar scroll behaviour
    if (navbar) {
        function updateNav() {
            if (window.scrollY > 50) {
                navbar.classList.remove('nav-transparent');
                navbar.classList.add('nav-scrolled');
                if (cta) {
                    cta.classList.add('cta-scrolled');
                    cta.classList.remove('cta-btn');
                }
            } else {
                navbar.classList.add('nav-transparent');
                navbar.classList.remove('nav-scrolled');
                if (cta) {
                    cta.classList.remove('cta-scrolled');
                    cta.classList.add('cta-btn');
                }
            }
        }
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav(); // run once on load
    }

    // Highlight active page in nav
    highlightActiveNav();
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.desktop-links a[data-page], #mobile-menu a[data-page]').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('text-red-700', 'font-bold');
        }
    });
}

// Close mobile menu
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-button');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    if (menuBtn) menuBtn.classList.remove('menu-open');
}

// Smooth scroll helper (for same-page anchors only)
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
}

// Scroll reveal using IntersectionObserver
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// Time slot selection (contact page)
function initTimeSlots() {
    document.querySelectorAll('.time-slot').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.time-slot').forEach(b => {
                b.classList.remove('border-amber-500', 'bg-amber-50', 'text-amber-700');
                b.classList.add('border-gray-200');
            });
            btn.classList.remove('border-gray-200');
            btn.classList.add('border-amber-500', 'bg-amber-50', 'text-amber-700');
            const hidden = document.getElementById('selected-time');
            if (hidden) hidden.value = btn.innerText;
        });
    });
}

// Package button autofill (homepage)
function initPackageButtons() {
    const packageSelect = document.getElementById('preferred-package');
    if (packageSelect) {
        document.querySelectorAll('[data-package-value]').forEach(btn => {
            btn.addEventListener('click', () => {
                packageSelect.value = btn.dataset.packageValue;
            });
        });
    }
}

// Form submission
function initForm() {
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const success = document.getElementById('success-message');
            btn.innerHTML = 'SENDING... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.disabled = true;
            setTimeout(() => {
                if (success) success.classList.remove('hidden');
                btn.innerHTML = 'REQUEST SENT ✓';
                btn.classList.add('bg-green-600');
                this.reset();
            }, 1500);
        });
    }
}

// FAQ toggle with close-others behaviour (service pages)
function initFaq() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.querySelector('.faq-question').classList.remove('active');
                i.querySelector('.faq-answer').classList.remove('active');
            });

            // Open current if it was closed
            if (!isOpen) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadPartials().then(() => {
        initTimeSlots();
        initPackageButtons();
        initForm();
        initFaq();
        initScrollReveal();
    });
});
