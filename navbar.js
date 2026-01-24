const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-links a");
const links = document.querySelectorAll(".nav-links a:not(.nav-btn)");

// Toggle mobile menu + hamburger animation
menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("show");
    menuToggle.classList.toggle("active"); // hamburger X animation
});

// MODAL OPEN/CLOSE
const openLoginModalBtn = document.getElementById('openModal');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeModal');
openLoginModalBtn.addEventListener('click', () => (loginModal.style.display = 'flex'));
closeLoginModal.addEventListener('click', () => (loginModal.style.display = 'none'));
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
});

// SWITCH LOGIN/REGISTER
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
showRegister.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});
showLogin.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});
const userIcon = document.getElementById('userIcon');
const cartCard = document.getElementById('cartCard');
cartCard.style.display = 'none';
userIcon.addEventListener('click', (e) => {
     e.stopPropagation();
    cartCard.style.display = cartCard.style.display === 'none' ? 'block' : 'none';
});
window.addEventListener('click', (e) => {
    if (!userIcon.contains(e.target) && !cartCard.contains(e.target)) cartCard.style.display = 'none';
});

// Multi-page active link logic
const currentPath = window.location.pathname.split("/").pop(); // Get only file name

links.forEach(link => {
    // Remove old active
    link.classList.remove("active");

    // Get href file name only
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
        link.classList.add("active");
    }

    // Close mobile menu on click
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("show");
        menuToggle.classList.remove("active");
    });
});

const navLogoImg = document.querySelector('.logo-img')
navLogoImg.className = 'logo-img display-none'

AOS.init({
    duration: 1000,   // animation speed (ms)
    once: true        // ek dafa hi chale
});
