const logo = document.getElementById("headerLogo");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const topSidebar = document.querySelector(".header");
const navSubLinks = document.querySelectorAll(".nav-sub-list");

const headerHeight = topSidebar.offsetHeight;

// Main function to handle section detection and update UI
function updateHeaderAndNav() {
    let currentSection = null;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY + headerHeight >= sectionTop && window.scrollY + headerHeight < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });

    if (currentSection) {
        if (currentSection.classList.contains("dark-section")) {
            if (logo.src.includes("dark")) {
                logo.src = "images/logo-light.png";

                navLinks.forEach((link) => {
                    link.classList.remove("blue");
                });

                navSubLinks.forEach((link) => {
                    link.classList.remove("grey-bg");
                });
            }
        } else {
            if (logo.src.includes("light")) {
                logo.src = "images/logo-dark.png";

                navLinks.forEach((link) => {
                    link.classList.add("blue");
                });

                navSubLinks.forEach((link) => {
                    link.classList.add("grey-bg");
                });
            }
        }
    }
}

// Call on scroll
window.addEventListener("scroll", updateHeaderAndNav);

// Call once on page load to set the initial state
window.addEventListener("load", updateHeaderAndNav);
