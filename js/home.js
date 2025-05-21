const aboutSection = document.querySelector("#about");
const bgLogo = document.querySelector(".background-logo");

const observerLogo = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                bgLogo.style.opacity = "0.05"; // or your desired visible opacity
            } else {
                bgLogo.style.opacity = "0";
            }
        });
    },
    {
        threshold: 0.2, // trigger when 20% of section is in view
    }
);

observerLogo.observe(aboutSection);
