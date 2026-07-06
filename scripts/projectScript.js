// TO GET THE HEIGHT OF NAVIGATION PANEL IN PROJECT PAGE
// THIS WILL HELP IN FIXING THE STICKY CARD IN THE WINDOW
const navbar = document.getElementById('navigation-list');

function updateNavbarHeight() {
// Measures the exact real-time height including all padding
const height = navbar.offsetHeight; 
document.documentElement.style.setProperty('--navbar-height', `${height}px`);
}

// Run it immediately when the page loads
updateNavbarHeight();

// Re-run it automatically if the user resizes their window
window.addEventListener('resize', updateNavbarHeight);