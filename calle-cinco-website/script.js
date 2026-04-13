/* ============================================
   CALLE CINCO DRIVING SCHOOL - JAVASCRIPT
   ============================================ */

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Close mobile menu when link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').style.display = 'none';
    });
});

// Scroll to booking section
function scrollToBooking() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// FAQ Toggle
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close other open FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.querySelector('.faq-question').classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    button.classList.toggle('active');
    answer.classList.toggle('active');
}

// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !phone || !email) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Prepare message
    const subject = 'New Driving Lesson Booking Request';
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:drive@callecinco.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your interest! Our team will contact you shortly.');
    form.reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.step, .package-card, .review-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }
        e.target.value = value;
    });
}

// Track form interactions for analytics
document.getElementById('bookingForm').addEventListener('focus', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        console.log('User focused on form field:', e.target.name);
    }
}, true);

// Call tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
    });
});

// Email tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email link clicked:', link.href);
    });
});

// Lazy load images (if using image optimization)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Calle Cinco Driving School - Website loaded successfully');
