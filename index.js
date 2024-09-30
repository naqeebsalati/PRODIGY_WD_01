// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to detect scroll events
window.addEventListener('scroll', () => {
    // If the page is scrolled down 1000px or more, add the "scrolled" class
    if (window.scrollY > 1000) {
        navbar.classList.add('scrolled');
    } else {
        // Remove the "scrolled" class if the scroll position is less than 1000px
        navbar.classList.remove('scrolled');
    }
});
