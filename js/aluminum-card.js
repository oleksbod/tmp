const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
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
