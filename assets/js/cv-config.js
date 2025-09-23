/**
 * CV SYSTEM - CONFIGURACIÓN UNIFICADA
 * Alejandro Battaglio & Jeferson Zambrano
 * Version: 1.0.0
 */

// ==========================================
// CONFIGURACIÓN POR PERFIL
// ==========================================

const CV_CONFIG = {
    alejandro: {
        name: "Alejandro Battaglio",
        fullName: "Alejandro Battaglio Quintana",
        role: "Chief Technology Officer",
        subtitle: "IT & WebOps Specialist | UX/UI & Digital Systems",
        email: "alebattaquin@gmail.com",
        phone: "+34 665 543 280",
        location: "Madrid, España",
        linkedin: "desarollador-alejandro-battaglio",
        github: "alebattaquin",
        website: "alebattaquin.github.io",
        theme: "default",
        colors: {
            primary: "#2563eb",
            primaryDark: "#1d4ed8",
            primaryLight: "#3b82f6"
        }
    },
    jeferson: {
        name: "Jeferson Zambrano",
        fullName: "Jeferson Zambrano",
        role: "IT & Web Ops Lead",
        subtitle: "Senior Frontend · UX/UI Designer · 10+ años de experiencia",
        email: "jeffproduccion@gmail.com",
        phone: "+34 688 351 935",
        location: "Madrid, España",
        linkedin: "jeffzambrano-diseno-web",
        github: "jeffzambrano",
        website: "jeffzambrano.github.io",
        theme: "jeferson",
        colors: {
            primary: "#10b981",
            primaryDark: "#059669", 
            primaryLight: "#34d399"
        }
    }
};

// ==========================================
// INICIALIZACIÓN DEL SISTEMA
// ==========================================

class CVSystem {
    constructor() {
        this.profile = this.detectProfile();
        this.config = CV_CONFIG[this.profile];
        this.init();
    }

    detectProfile() {
        // Detectar perfil por data-theme o URL
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'jeferson') return 'jeferson';
        
        // Fallback por URL
        const url = window.location.href;
        if (url.includes('jeferson') || url.includes('jeff')) return 'jeferson';
        
        return 'alejandro'; // Default
    }

    init() {
        this.setupTheme();
        this.initializeAOS();
        this.setupNavigation();
        this.setupContactForm();
        this.setupFormLabels();
        this.setupScrollEffects();
        this.setupActiveNavLinks();
        
        console.log(`CV System initialized for ${this.config.name}`);
    }

    setupTheme() {
        if (this.config.theme !== 'default') {
            document.documentElement.setAttribute('data-theme', this.config.theme);
        }
        
        // Actualizar meta tags dinámicamente
        this.updateMetaTags();
    }

    updateMetaTags() {
        const updateMeta = (name, content) => {
            let meta = document.querySelector(`meta[name="${name}"]`) || 
                      document.querySelector(`meta[property="${name}"]`);
            if (meta) meta.setAttribute('content', content);
        };

        updateMeta('description', `${this.config.fullName} - ${this.config.role} con experiencia en tecnología y desarrollo web`);
        updateMeta('og:title', `${this.config.name} - ${this.config.role}`);
        updateMeta('og:description', this.config.subtitle);
        updateMeta('twitter:title', `${this.config.name} - ${this.config.role}`);
        updateMeta('twitter:description', this.config.subtitle);
    }

    initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-in-out'
            });
        }
    }

    setupNavigation() {
        const hamburger = document.querySelector('.navbar__hamburger');
        const navMenu = document.querySelector('.navbar__menu');
        const navLinks = document.querySelectorAll('.navbar__link');

        if (!hamburger || !navMenu) return;

        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('navbar__hamburger--active');
            navMenu.classList.toggle('navbar__menu--active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = hamburger.classList.contains('navbar__hamburger--active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('navbar__hamburger--active');
                navMenu.classList.remove('navbar__menu--active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('navbar__hamburger--active');
                navMenu.classList.remove('navbar__menu--active');
                document.body.style.overflow = '';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Validate form
            if (!this.validateForm(data)) {
                this.showNotification('Por favor, completa todos los campos correctamente.', 'error');
                return;
            }

            // Create mailto link
            const mailtoLink = `mailto:${this.config.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`)}`;
            
            // Open mail client
            window.location.href = mailtoLink;
            
            // Reset form and show success message
            form.reset();
            this.resetFormLabels();
            this.showNotification('¡Gracias por tu mensaje! Se abrirá tu cliente de correo.', 'success');
        });
    }

    validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return data.name.trim() && 
               data.email.trim() && 
               emailRegex.test(data.email) &&
               data.subject.trim() && 
               data.message.trim();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles if not present
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 9999;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    color: white;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    animation: slideInRight 0.3s ease-out;
                    max-width: 400px;
                }
                .notification-success { background: #10b981; }
                .notification-error { background: #ef4444; }
                .notification-info { background: var(--color-primary); }
                .notification-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                .notification-close:hover { opacity: 1; }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(styles);
        }

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        const autoRemove = setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notification);
        });
    }

    removeNotification(notification) {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    setupFormLabels() {
        const inputs = document.querySelectorAll('.form__group input, .form__group textarea');
        
        inputs.forEach(input => {
            // Focus events
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('form__group--focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    input.parentElement.classList.remove('form__group--focused');
                }
            });
            
            // Check if input has value on page load
            if (input.value.trim()) {
                input.parentElement.classList.add('form__group--focused');
            }
        });
    }

    resetFormLabels() {
        document.querySelectorAll('.form__group--focused').forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!input.value.trim()) {
                group.classList.remove('form__group--focused');
            }
        });
    }

    setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateNavbar = () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (currentScrollY > 50) {
                navbar.classList.add('navbar--scrolled');
            } else {
                navbar.classList.remove('navbar--scrolled');
            }

            // Hide/show navbar on scroll (optional)
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScrollY = currentScrollY;
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    setupActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar__link');
        
        if (!sections.length || !navLinks.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentSection = entry.target.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('navbar__link--active'));
                    
                    // Add active class to current section link
                    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
                    if (activeLink) {
                        activeLink.classList.add('navbar__link--active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

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
}

// ==========================================
// INICIALIZACIÓN AUTOMÁTICA
// ==========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.cvSystem = new CVSystem();
    });
} else {
    window.cvSystem = new CVSystem();
}

// ==========================================
// UTILIDADES GLOBALES
// ==========================================

window.CVUtils = {
    // Format phone for calling
    formatPhoneForCall: (phone) => phone.replace(/\s/g, ''),
    
    // Copy text to clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                return true;
            } catch (err) {
                document.body.removeChild(textArea);
                return false;
            }
        }
    },
    
    // Lazy load images
    lazyLoadImages: () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    },
    
    // Analytics tracking (ready for implementation)
    track: (event, properties = {}) => {
        // Implement analytics tracking here
        console.log('Track event:', event, properties);
        
        // Example: Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', event, properties);
        }
        
        // Example: Custom analytics
        if (window.analytics && typeof window.analytics.track === 'function') {
            window.analytics.track(event, properties);
        }
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CVSystem, CV_CONFIG, CVUtils };
}