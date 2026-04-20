// OHWOW AGENCY - Main JavaScript
// GSAP Menu Transitions
if (typeof gsap !== 'undefined') {
    const topNav = document.getElementById('topNav');
    let navTl = gsap.timeline({ paused: true });
    
    navTl.to(topNav, {
        duration: 0.6,
        scale: 0.95,
        borderRadius: '35px',
        padding: '12px 15px 12px 25px',
        gap: '40px',
        ease: 'power2.inOut'
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Cursor Trail Effect
const cursorTrail = document.querySelector('.cursor-trail');
const trailDots = [];
const numDots = 5;

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.opacity = (1 - (i / numDots)) * 0.8;
    dot.style.transform = `scale(${1 - (i / numDots * 0.5)})`;
    cursorTrail.appendChild(dot);
    trailDots.push({
        element: dot,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    });
}

document.addEventListener('mousemove', (e) => {
    trailDots[0].targetX = e.clientX;
    trailDots[0].targetY = e.clientY;
});

function animateCursorTrail() {
    for (let i = 0; i < trailDots.length; i++) {
        const dot = trailDots[i];
        
        if (i === 0) {
            dot.x += (dot.targetX - dot.x) * 0.3;
            dot.y += (dot.targetY - dot.y) * 0.3;
        } else {
            const prevDot = trailDots[i - 1];
            dot.targetX = prevDot.x;
            dot.targetY = prevDot.y;
            dot.x += (dot.targetX - dot.x) * (0.3 - i * 0.05);
            dot.y += (dot.targetY - dot.y) * (0.3 - i * 0.05);
        }
        
        dot.element.style.left = dot.x + 'px';
        dot.element.style.top = dot.y + 'px';
    }
    
    requestAnimationFrame(animateCursorTrail);
}
animateCursorTrail();

// Scroll to section function
function scrollToSection(index) {
    const section = document.getElementById(`section-${index}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('specialtyPopup');
    popup.classList.remove('visible');
}

// Close popup on click outside (mobile)
document.addEventListener('click', (e) => {
    const popup = document.getElementById('specialtyPopup');
    if (popup.classList.contains('visible') && !popup.contains(e.target) && !e.target.hasAttribute('data-popup')) {
        closePopup();
    }
});

// Specialty popup
const popup = document.getElementById('specialtyPopup');
const popupTitle = document.getElementById('popupTitle');
const popupText = document.getElementById('popupText');

function handleSpecialtyHover(e) {
    const item = e.target;
    const data = item.getAttribute('data-popup');
    if (data) {
        const [title, text] = data.split('|');
        popupTitle.textContent = title;
        popupText.textContent = text;
        
        if (window.innerWidth > 768) {
            // Desktop behavior
            const rect = item.getBoundingClientRect();
            const columnRect = item.closest('.service-column').getBoundingClientRect();
            
            // Check if last column
            const isLastColumn = columnRect.right > window.innerWidth - 500;
            
            if (isLastColumn) {
                popup.classList.add('right');
                popup.classList.remove('left');
                popup.style.left = (rect.left - 380) + 'px';
            } else {
                popup.classList.add('left');
                popup.classList.remove('right');
                popup.style.left = (rect.right + 30) + 'px';
            }
            
            popup.style.top = (rect.top - 10) + 'px';
        } else {
            // Mobile behavior - center popup
            popup.style.left = '50%';
            popup.style.top = '50%';
        }
        
        popup.classList.add('visible');
    }
}

document.querySelectorAll('.service-list li').forEach(item => {
    if (window.innerWidth > 768) {
        item.addEventListener('mouseenter', handleSpecialtyHover);
        item.addEventListener('mouseleave', () => {
            popup.classList.remove('visible');
        });
    } else {
        item.addEventListener('click', handleSpecialtyHover);
    }
});

// Scroll effects with parallax and dark mode
let lastScrollTop = 0;
let scrollAnimationId = null;
let footerImageScrollY = 0;

window.addEventListener('scroll', () => {
    if (scrollAnimationId) {
        cancelAnimationFrame(scrollAnimationId);
    }
    
    scrollAnimationId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollPercentage = (scrolled / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
        
        // GSAP nav animation
        const topNav = document.getElementById('topNav');
        if (typeof gsap !== 'undefined' && topNav) {
            if (scrolled > 100) {
                topNav.classList.add('scrolled');
                if (typeof navTl !== 'undefined') navTl.play();
            } else {
                topNav.classList.remove('scrolled');
                if (typeof navTl !== 'undefined') navTl.reverse();
            }
        } else {
            // Fallback without GSAP
            if (scrolled > 100) {
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
        }
        
        // Check if in CTA section for dark mode
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            const ctaRect = ctaSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            if (ctaRect.top < viewportHeight * 0.5 && ctaRect.bottom > viewportHeight * 0.5) {
                document.body.classList.add('dark-mode');
                topNav.classList.add('dark-mode');
                ctaSection.classList.add('in-view');
            } else {
                document.body.classList.remove('dark-mode');
                topNav.classList.remove('dark-mode');
                ctaSection.classList.remove('in-view');
            }
        }
        
        // Check if in footer
        const footer = document.querySelector('footer');
        const footerRect = footer.getBoundingClientRect();
        const navContainer = document.querySelector('.nav-container');
        
        if (footerRect.top < window.innerHeight / 2) {
            navContainer.classList.add('inverted');
            
            // Footer title stretch UP effect
            const visible = Math.min(1, (window.innerHeight - footerRect.top) / (window.innerHeight * 0.5));
            const footerSubtitle = document.getElementById('footerSubtitle');
            const footerTitle = document.getElementById('footerTitle');
            const footerImage = document.getElementById('footerImage');
            
            footerSubtitle.classList.add('visible');
            
            // Stretch UP by moving subtitle up and scaling title
            const stretchScale = 1 + (visible * 0.6);
            const stretchMove = -(visible * 80);
            
            footerTitle.style.setProperty('--stretch-scale', stretchScale);
            footerSubtitle.style.setProperty('--stretch-amount', `${stretchMove}px`);
            
            footerTitle.classList.add('stretched');
            footerSubtitle.classList.add('stretched');
            
            // Footer image parallax
            if (footerImage) {
                const parallaxOffset = (scrolled - lastScrollTop) * 0.3;
                footerImageScrollY += parallaxOffset;
                footerImage.style.transform = `translateY(${Math.sin(scrolled * 0.002) * 10}px)`;
            }
        } else {
            navContainer.classList.remove('inverted');
            
            const footerSubtitle = document.getElementById('footerSubtitle');
            const footerTitle = document.getElementById('footerTitle');
            
            if (footerTitle && footerSubtitle) {
                footerTitle.style.setProperty('--stretch-scale', 1);
                footerSubtitle.style.setProperty('--stretch-amount', '0px');
                footerTitle.classList.remove('stretched');
                footerSubtitle.classList.remove('stretched');
            }
        }
        
        // Update nav dots
        updateNavDots();
        lastScrollTop = scrolled;
    });
});

function updateNavDots() {
    const sections = document.querySelectorAll('[id^="section-"]');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        
        const navItems = document.querySelectorAll('.nav-item');
        const navItem = navItems[index];
        
        if (navItem && scrollPosition >= top && scrollPosition <= bottom) {
            navItems.forEach(item => {
                item.querySelector('.nav-dot').classList.remove('active');
            });
            navItem.querySelector('.nav-dot').classList.add('active');
        }
    });
}

// Toggle team card with continuous animation
function toggleCard(card) {
    const isExpanded = card.classList.contains('expanded');
    
    document.querySelectorAll('.team-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
            c.querySelector('.card-expand').textContent = '+';
        }
    });
    
    card.classList.toggle('expanded');
    card.querySelector('.card-expand').textContent = isExpanded ? '+' : '×';
}

// Toggle portfolio
function togglePortfolio(item) {
    const isExpanded = item.classList.contains('expanded');
    
    document.querySelectorAll('.portfolio-item').forEach(i => {
        if (i !== item) {
            i.classList.remove('expanded');
            i.querySelector('.portfolio-expand').textContent = '+';
        }
    });
    
    item.classList.toggle('expanded');
    item.querySelector('.portfolio-expand').textContent = isExpanded ? '+' : '×';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code here
    console.log('OHWOW Agency - Initialized');
});