const tabs = document.querySelectorAll(".roof-tab");
const panels = document.querySelectorAll(".roof-panel");
const roofSection = document.querySelector(".roof-tabs-section");

let currentIndex = 0;
let autoTabInterval;
let isInView = false;

function selectRoof(type) {
    tabs.forEach((btn) => btn.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    document.querySelector(`.roof-tab[onclick*="${type}"]`)?.classList.add("active");
    document.getElementById(`roof-${type}`)?.classList.add("active");

    currentIndex = Array.from(tabs).findIndex((btn) => btn.classList.contains("active"));

    resetAutoSwitch();
}

function startAutoSwitch() {
    if (autoTabInterval) return; // не створювати дубль
    autoTabInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length;
        const nextType = tabs[currentIndex].getAttribute("onclick").match(/'([^']+)'/)[1];
        selectRoof(nextType);
    }, 6000);
}

function stopAutoSwitch() {
    clearInterval(autoTabInterval);
    autoTabInterval = null;
}

function resetAutoSwitch() {
    stopAutoSwitch();
    if (isInView) startAutoSwitch();
}

// Наведи/відведи мишу — пауза/відновлення
document.querySelector(".roof-content")?.addEventListener("mouseenter", stopAutoSwitch);
document.querySelector(".roof-content")?.addEventListener("mouseleave", () => {
    if (isInView) startAutoSwitch();
});

// Observer — включити тільки коли секція в полі зору
const roofObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isInView = true;
                roofSection.classList.add("fade-in");
                roofSection.classList.remove("fade-out");
                startAutoSwitch();
            } else {
                isInView = false;
                stopAutoSwitch();
                roofSection.classList.remove("fade-in");
                roofSection.classList.add("fade-out");
            }
        });
    },
    { threshold: 0.2 } // 30% секції має бути видимим
);

roofObserver.observe(roofSection);
