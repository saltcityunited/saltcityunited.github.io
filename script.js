



// Get the close button and navbar collapse
const closeButton = document.querySelector('.close-btn');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add an event listener to the close button to hide the navbar
closeButton.addEventListener('click', () => {
    navbarCollapse.classList.remove('show'); // Hide the navbar
});
