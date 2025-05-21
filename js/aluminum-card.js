const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const cardContainer = document.getElementById("cardSlider");
let current = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
    current = index;
}

function nextCard() {
    const next = (current + 1) % cards.length;
    showCard(next);
}

function prevCard() {
    const prev = (current - 1 + cards.length) % cards.length;
    showCard(prev);
}

function goToCard(index) {
    showCard(index);
}

showCard(0);

// ✅ Add swipe detection
let touchStartX = 0;
let touchEndX = 0;

cardContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

cardContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const delta = touchStartX - touchEndX;
    const threshold = 50; // Minimum swipe distance in px

    if (delta > threshold) {
        // Swiped left
        nextCard();
    } else if (delta < -threshold) {
        // Swiped right
        prevCard();
    }
}
