const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-links a");
const links = document.querySelectorAll(".nav-links a:not(.nav-btn)");

// Toggle mobile menu + hamburger animation
menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("show");
    menuToggle.classList.toggle("active"); // hamburger X animation
});

// Multi-page active link logic
const currentPath = window.location.pathname.split("/").pop(); // Get only file name

links.forEach(link => {
    // Remove old active
    link.classList.remove("active");

    // Get href file name only
    const linkPath = link.getAttribute("href").split("/").pop();

    if(linkPath === currentPath) {
        link.classList.add("active");
    }

    // Close mobile menu on click
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("show");
        menuToggle.classList.remove("active");
    });
});

AOS.init({
    duration: 1000,   // animation speed (ms)
    once: true        // ek dafa hi chale
});
