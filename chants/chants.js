// Function to reveal chant cards when they enter the viewport
function revealChants() {
    const chants = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.05 // Chant card must be at least 10% visible to trigger
    });

    chants.forEach(chant => {
        observer.observe(chant); // Observe each chant card
    });
}

// Initialize chant reveal on page load
window.addEventListener('DOMContentLoaded', revealChants);
