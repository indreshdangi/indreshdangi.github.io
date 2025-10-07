document.addEventListener("DOMContentLoaded", function() {
    // Theme switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
    });

    // Active link switching
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Typing animation
    const typingText = document.querySelector('.typing-text');
    const text = "A Visionary Entrepreneur and AI Innovator";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});

