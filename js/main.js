// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send the form data to the server here
            // For now, we'll just show a success message
            alert('Thank you for your inquiry. We will contact you shortly!');
            contactForm.reset();
        });
    }
    
    // Testimonial slider (to be implemented if needed)
    const setupTestimonialSlider = () => {
        // This would be implemented with a slider library like Swiper.js in a real project
        console.log('Santa Clarita Moving Company testimonial slider initialized');
        
        // If we implement a slider in the future, we could add additional testimonials here
        const additionalTestimonials = [
            {
                content: "Santa Clarita Moving Company handled our move from Newhall to Valencia with exceptional care. Every item arrived in perfect condition!",
                author: "Michael Rodriguez",
                role: "Residential Move in Newhall"
            },
            {
                content: "As a small business in Santa Clarita, we needed a reliable moving company for our office relocation. These guys were punctual, professional, and fairly priced.",
                author: "Jennifer Williams",
                role: "Commercial Move in Santa Clarita"
            }
        ];
        
        // Future implementation would add these to the slider
    };
    
    // Animated counting for stats (if added later)
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps
            
            let count = 0;
            const updateCounter = () => {
                count += step;
                
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Initialize any additional features
    // setupTestimonialSlider();
    // animateCounters();
});
