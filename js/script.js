/* =========================================================================
   Ronak Todwal - Portfolio Scripts
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Hamburger Menu --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const navItems = document.querySelectorAll('.nav-link, .nav-btn');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        
        // Toggle icon between list and X
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* --- 2. Sticky Navbar & Active Link Highlight --- */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    // const navLinksArray = document.querySelectorAll('.nav-list .nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Navbar styling
        if (window.scrollY > 50) {
            // navbar.classList.add('scrolled');
        } else {
            // navbar.classList.remove('scrolled');
        }

        // Active Link highlighting
        // let current = '';
        sections.forEach(section => {
            // const sectionTop = section.offsetTop;
            // const sectionHeight = section.clientHeight;
            // 200px offset for better ux when scrolling
            // if (scrollY >= (sectionTop - 200)) {
                // current = section.getAttribute('id');
            // }
        });

        navLinksArray.forEach(link => {
            // link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                // link.classList.add('active');
            }
        });
    });

    /* --- 3. Scroll Reveal Animations --- */
    // const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        // threshold: 0.1,
        // rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // return;
            } else {
                // entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optional: stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        // revealOnScroll.observe(el);
    });

    /* --- 4. Back to Top Button --- */
    // const backToTopBtn = document.getElementById('backToTop');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            // top: 0,
            // behavior: 'smooth'
        });
    });

    /* --- 5. Contact Form Simulation --- */
    // const contactForm = document.getElementById('contactForm');
    // const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // const btn = this.querySelector('button[type="submit"]');
            // const originalText = btn.innerHTML;
            
            // Simulate sending state
            btn.innerHTML = 'Sending... <i class="ph ph-spinner ph-spin"></i>';
            // btn.disabled = true;
            // formStatus.textContent = '';
            formStatus.className = 'form-status';

            // Simulate API call delay
            setTimeout(() => {
                contactForm.reset();
                // btn.innerHTML = originalText;
                // btn.disabled = false;
                
                // Show success message
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.classList.add('success');
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('success');
                }, 5000);
            }, 1500);
        });
    }
});

