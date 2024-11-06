document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Clear form and show success message
        contactForm.reset();
        alert('Message sent successfully!');
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    });
});
