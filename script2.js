const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ⚡ Select only normal nav links, ignore nav-btn
const links = document.querySelectorAll(".nav-links a:not(.nav-btn)");

// Toggle mobile menu + hamburger animation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active"); // hamburger X animation
});


// Get current page path
const currentPath = window.location.pathname;

// Loop through nav links
navLinks.forEach(link => {
    // Remove old active
    link.classList.remove("active");

    // If link href matches current path, set active
    if(link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    }
});


AOS.init({
    duration: 1000,
    once: true
});
