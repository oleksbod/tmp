const facadeData = {
    ventilated: {
        title: "Вентильований фасад",
        img: "images/facade/ventilated.jpg",
        description:
            "Сучасний спосіб обробки будівлі, який забезпечує тривалий захист та збереження вигляду будівлі. Він гарантує довговічність та ефективну ізоляцію, що робить вашу будівлю більш економічною та привабливою.",
    },
    acp: {
        title: "Алюмінієві композитні панелі",
        img: "images/facade/acp.jpg",
        description:
            "Міцні, легкі, рівні та багатошарові фасадні панелі, які складаються з алюмінієвих листів, покритих захисним шаром та внутрішнього полімерного шару.",
    },
    hpl: {
        title: "HPL панелі",
        img: "images/facade/hpl.jpg",
        description:
            "Тип декоративних зовнішніх панелей, які використовуються в будівництві для обробки фасадів будівель, меблів, інтер’єрів та інших застосувань.",
    },
    porcelain: {
        title: "Керамограніт",
        img: "images/facade/porcelain.jpg",
        description:
            "Відзначається високою міцністю, стійкістю до зносу, вогнестійкістю та довговічністю. Пропонує широкий вибір дизайнів, текстур та геометричних форм.",
    },
    fibrocement: {
        title: "Фіброцементні плити",
        img: "images/facade/fibrocement.jpg",
        description:
            "Сучасний будівельний матеріал з цементу та волокон, який має високу стійкість до атмосферного впливу.",
    },
    ceramic: {
        title: "Керамічні панелі",
        img: "images/facade/ceramic.jpg",
        description:
            "Мають високу стійкість до вологи, ультрафіолету та морської агресії, що робить їх ідеальними для різних кліматичних умов.",
    },
};

function openModal(id) {
    const data = facadeData[id];
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-img").src = data.img;
    document.getElementById("modal-description").textContent = data.description;
    document.getElementById("facade-modal").classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeModal() {
    document.getElementById("facade-modal").classList.remove("open");
    document.body.classList.remove("no-scroll");
}

document.getElementById("facade-modal").addEventListener("click", function (e) {
    const modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(e.target)) {
        closeModal();
    }
});

const facadeObserver = new IntersectionObserver(
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

// Спостерігати за всіма facade-картками
document.querySelectorAll(".facade-card").forEach((card) => {
    card.classList.add("hidden");
    facadeObserver.observe(card);
});
