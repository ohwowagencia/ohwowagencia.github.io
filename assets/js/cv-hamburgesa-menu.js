/**
 * NAVBAR HAMBURGER SYSTEM
 * Sistema unificado de navegación con menú hamburguesa
 * Compatible con las metodologías SMACSS + BEM + OOCSS
 */

class NavbarHamburger {
    constructor() {
        // Elements
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('navbar-hamburger');
        this.menu = document.getElementById('navbar-menu');
        this.overlay = document.getElementById('navbar-overlay');
        this.menuLinks = document.querySelectorAll('.navbar__link');
        
        // State
        this.isOpen = false;
        this.lastScrollY = window.scrollY;
        
        // Bind methods
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        
        this.init();
    }
    
    init() {
        if (!this.hamburger || !this.menu) {
            console.warn('Navbar elements not found');
            return;
        }
        
        this.setupEventListeners();
        this.setupScrollEffect();
        this.setupActiveLinks();
        
        console.log('Navbar Hamburger initialized');
    }
    
    setupEventListeners() {
        // Hamburger button
        this.hamburger.addEventListener('click', this.toggleMenu);
        
        // Overlay click
        if (this.overlay) {
            this.overlay.addEventListener('click', this.closeMenu);
        }
        
        // Menu links
        this.menuLinks.forEach(link => {
            link.addEventListener('click', this.handleLinkClick);
        });
        
        // Window events
        window.addEventListener('scroll', this.throttle(this.handleScroll, 100));
        window.addEventListener('resize', this.throttle(this.handleResize, 250));
        document.addEventListener('keydown', this.handleKeydown);
        
        // Outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.navbar.contains(e.target)) {
                this.closeMenu();
            }
        });
    }
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.isOpen = true;
        
        // Add BEM modifier classes
        this.hamburger.classList.add('navbar__hamburger--active');
        this.menu.classList.add('navbar__menu--active');
        
        if (this.overlay) {
            this.overlay.classList.add('navbar__overlay--active');
        }
        
        // Prevent body scroll
        document.body.classList.add('navbar--menu-open');
        
        // Update ARIA attributes
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.hamburger.setAttribute('aria-label', 'Cerrar menú de navegación');
        
        // Focus management
        this.trapFocus();
        
        // Dispatch custom event
        this.dispatchEvent('menuOpen');
    }
    
    closeMenu() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        
        // Remove BEM modifier classes
        this.hamburger.classList.remove('navbar__hamburger--active');
        this.menu.classList.remove('navbar__menu--active');
        
        if (this.overlay) {
            this.overlay.classList.remove('navbar__overlay--active');
        }
        
        // Allow body scroll
        document.body.classList.remove('navbar--menu-open');
        
        // Update ARIA attributes
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
        
        // Dispatch custom event
        this.dispatchEvent('menuClose');
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for styling
        if (currentScrollY > 50) {
            this.navbar.classList.add('navbar--scrolled');
        } else {
            this.navbar.classList.remove('navbar--scrolled');
        }
        
        // Close mobile menu on scroll (optional)
        if (this.isOpen && Math.abs(currentScrollY - this.lastScrollY) > 10) {
            this.closeMenu();
        }
        
        this.lastScrollY = currentScrollY;
    }
    
    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && this.isOpen) {
            this.closeMenu();
        }
    }
    
    handleKeydown(e) {
        // Close menu on Escape key
        if (e.key === 'Escape' && this.isOpen) {
            this.closeMenu();
            this.hamburger.focus();
        }
    }
    
    handleLinkClick(e) {
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        // Close mobile menu when clicking internal links
        if (this.isOpen && href.startsWith('#')) {
            // Small delay to allow smooth scroll to start
            setTimeout(() => {
                this.closeMenu();
            }, 100);
        }
        
        // Update active state
        this.setActiveLink(link);
        
        // Smooth scroll for anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            this.smoothScrollTo(href);
        }
    }
    
    smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (!element) return;
        
        const offsetTop = element.offsetTop;
        const navbarHeight = this.navbar.offsetHeight;
        
        window.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    }
    
    setActiveLink(activeLink) {
        // Remove active class from all links
        this.menuLinks.forEach(link => {
            link.classList.remove('navbar__link--active');
        });
        
        // Add active class to clicked link
        if (activeLink) {
            activeLink.classList.add('navbar__link--active');
        }
    }
    
    setupActiveLinks() {
        // Set up intersection observer for automatic active states
        const sections = document.querySelectorAll('section[id]');
        if (!sections.length) return;
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentSection = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
                    this.setActiveLink(activeLink);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    trapFocus() {
        if (!this.isOpen) return;
        
        const focusableElements = this.menu.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // Focus first element
        if (firstElement) {
            firstElement.focus();
        }
        
        // Trap focus within menu
        this.menu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
    
    dispatchEvent(eventName, detail = {}) {
        const event = new CustomEvent(`navbar:${eventName}`, {
            detail: {
                ...detail,
                isOpen: this.isOpen,
                navbar: this.navbar
            }
        });
        
        document.dispatchEvent(event);
    }
    
    // Utility methods
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Public API methods
    open() {
        this.openMenu();
    }
    
    close() {
        this.closeMenu();
    }
    
    toggle() {
        this.toggleMenu();
    }
    
    isMenuOpen() {
        return this.isOpen;
    }
    
    destroy() {
        // Remove all event listeners and clean up
        this.hamburger.removeEventListener('click', this.toggleMenu);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('keydown', this.handleKeydown);
        
        // Remove classes
        this.closeMenu();
        this.navbar.classList.remove('navbar--scrolled');
        
        console.log('Navbar Hamburger destroyed');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.navbarHamburger = new NavbarHamburger();
    });
} else {
    window.navbarHamburger = new NavbarHamburger();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavbarHamburger;
}

// Custom event listeners (optional usage examples)
document.addEventListener('navbar:menuOpen', (e) => {
    console.log('Mobile menu opened', e.detail);
});

document.addEventListener('navbar:menuClose', (e) => {
    console.log('Mobile menu closed', e.detail);
});