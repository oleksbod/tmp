const partnerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    },
    {
        threshold: 0.3,
    }
);

// ініціалізація: всі partner-картки стартово приховані
document.querySelectorAll(".partner-card").forEach((card) => {
    card.classList.add("hidden");
    partnerObserver.observe(card);
});
