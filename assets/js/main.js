document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation (பக்கத்தை ஸ்க்ரோல் செய்யும்போது எலிமெண்ட்கள் தோன்றும்)
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 2. Mobile Menu Logic (மெனு பட்டன் வேலை செய்ய)
    const initMobileMenu = () => {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.onclick = () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('open');
            };

            // மெனு லிங்க்கை கிளிக் செய்தால் மெனு தானாக மூடிக்கொள்ளும்
            document.querySelectorAll('.nav-link').forEach(link => {
                link.onclick = () => {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('open');
                };
            });
        } else {
            // Navbar லோட் ஆகவில்லை என்றால் மீண்டும் முயற்சி செய்யும்
            setTimeout(initMobileMenu, 500);
        }
    };

    initMobileMenu();

    // 3. Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});
