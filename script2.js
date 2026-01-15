const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ⚡ Select only normal nav links, ignore nav-btn
const links = document.querySelectorAll(".nav-links a:not(.nav-btn)");

// Toggle mobile menu + hamburger animation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active"); // hamburger X animation
});

// Active link logic
links.forEach(link => {
    link.addEventListener("click", () => {
        // Remove active from all normal links
        links.forEach(l => l.classList.remove("active"));

        // Add active to clicked link
        link.classList.add("active");

        // Close mobile menu if open
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
    });
});

AOS.init({
    duration: 1000,
    once: true
});
