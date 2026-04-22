// Hierl backt - JavaScript Interactivity

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    formMessage.classList.add('hidden');
    formMessage.className = 'hidden mt-4 p-4 rounded-lg';
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const errors = validateForm(data);
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span>Wird gesendet...';
    
    // Simulate form submission (replace with actual EmailJS or Formspree integration)
    try {
        // TODO: Integrate with EmailJS or Formspree
        // For now, simulate a successful submission
        await simulateFormSubmission(data);
        
        // Show success message
        formMessage.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle text-green-600 text-2xl mr-3"></i>
                <div>
                    <h4 class="font-bold text-green-800">Vielen Dank für deine Anfrage!</h4>
                    <p class="text-green-700">Wir melden uns schnellstmöglich bei dir.</p>
                </div>
            </div>
        `;
        formMessage.classList.remove('hidden');
        formMessage.classList.add('success-message');
        
        // Reset form
        contactForm.reset();
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        // Show error message
        formMessage.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-exclamation-circle text-red-600 text-2xl mr-3"></i>
                <div>
                    <h4 class="font-bold text-red-800">Fehler beim Senden</h4>
                    <p class="text-red-700">Bitte versuche es später erneut oder kontaktiere uns direkt per E-Mail.</p>
                </div>
            </div>
        `;
        formMessage.classList.remove('hidden');
        formMessage.classList.add('error-message-box');
    } finally {
        // Restore button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

// ============================================
// FORM VALIDATION FUNCTIONS
// ============================================
function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push({
            field: 'name',
            message: 'Bitte gib deinen vollständigen Namen ein (mindestens 2 Zeichen).'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push({
            field: 'email',
            message: 'Bitte gib eine gültige E-Mail-Adresse ein.'
        });
    }
    
    return errors;
}

function showFormErrors(errors) {
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.add('hidden');
        el.textContent = '';
    });
    
    // Show errors
    errors.forEach(error => {
        const field = document.getElementById(error.field);
        const errorMsg = field.parentElement.querySelector('.error-message');
        
        if (field && errorMsg) {
            field.classList.add('border-red-500');
            field.classList.add('shake');
            errorMsg.textContent = error.message;
            errorMsg.classList.remove('hidden');
            
            // Remove shake class after animation
            setTimeout(() => {
                field.classList.remove('shake');
            }, 400);
            
            // Remove error styling on input
            field.addEventListener('input', () => {
                field.classList.remove('border-red-500');
                errorMsg.classList.add('hidden');
            }, { once: true });
        }
    });
    
    // Focus first error field
    if (errors.length > 0) {
        const firstErrorField = document.getElementById(errors[0].field);
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }
}

// Simulate form submission (replace with actual backend integration)
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful submission
            console.log('Form data:', data);
            resolve();
            
            // To simulate error, use: reject(new Error('Submission failed'));
        }, 1500);
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, gallery items, etc.
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    observer.observe(el);
});

// ============================================
// IMAGE LAZY LOADING OPTIMIZATION
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// EMAILJS INTEGRATION (OPTIONAL)
// ============================================
/*
To integrate EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create an email service and template
3. Get your Public Key, Service ID, and Template ID
4. Uncomment and configure this code:

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

// Update the form submission handler
async function submitFormWithEmailJS(data) {
    try {
        const response = await emailjs.send(
            "YOUR_SERVICE_ID",      // Replace with your service ID
            "YOUR_TEMPLATE_ID",     // Replace with your template ID
            {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone || 'Nicht angegeben',
                event_type: data['event-type'] || 'Nicht angegeben',
                date: data.date || 'Nicht angegeben',
                guests: data.guests || 'Nicht angegeben',
                message: data.message || 'Keine Nachricht'
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
}

// Then replace simulateFormSubmission with submitFormWithEmailJS in the form handler
*/

// ============================================
// FORMSPREE INTEGRATION (ALTERNATIVE)
// ============================================
/*
To integrate Formspree:

1. Sign up at https://formspree.io/
2. Create a form and get your form endpoint
3. Update the form submission:

async function submitFormWithFormspree(data) {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Form submission failed');
    }
    
    return response.json();
}

// Then replace simulateFormSubmission with submitFormWithFormspree in the form handler
*/

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🍰 Hierl backt - Website geladen!', 'font-size: 16px; font-weight: bold; color: #8B6F5C;');
console.log('%cEntwickelt mit ❤️ und Leidenschaft für Desserts', 'font-size: 12px; color: #666;');
