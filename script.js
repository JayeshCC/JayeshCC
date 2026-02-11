document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ========================================
    // Typing Effect
    // ========================================
    const phrases = [
        'AI Builder',
        'Security Enthusiast',
        'Full-Stack Developer',
        'Code. Secure. Automate.'
    ];
    const typingEl = document.getElementById('typingText');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typingEl) return;

        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 34 : 70;

        if (!isDeleting && charIndex === currentPhrase.length) {
            delay = 1700;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 320;
        }

        setTimeout(type, delay);
    }

    if (typingEl) {
        if (prefersReducedMotion) {
            typingEl.textContent = phrases[0];
        } else {
            type();
        }
    }

    // ========================================
    // Mobile Menu
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    // ========================================
    // Active Nav Link Highlighting
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });

    // ========================================
    // Scroll Reveal (Intersection Observer)
    // ========================================
    const revealElements = document.querySelectorAll(
        '.skill-category, .project-card, .education-item, .credential-item, .timeline-item, .about-grid, .contact-grid'
    );

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.16,
            rootMargin: '-18px'
        });

        revealElements.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
            observer.observe(el);
        });
    } else {
        revealElements.forEach(el => {
            el.classList.add('visible');
        });
    }

    // ========================================
    // Contact Form (Formspree)
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    formStatus.textContent = 'Something went wrong. Please try again.';
                    formStatus.className = 'form-status error';
                }
            } catch {
                formStatus.textContent = 'Network error. Please try again.';
                formStatus.className = 'form-status error';
            }

            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;

            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        });
    }

    // ========================================
    // External Links — Security
    // ========================================
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
