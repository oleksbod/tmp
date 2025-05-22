/*const galleryItems = [
    { src: "images/objects/kfc.jpg", title: "KFC, м. Львів, просп. Червоної Калини, 60" },
    { src: "images/objects/maestral.jpg", title: "Hotel Maestral, м. Львів, вул. Олени Степанівни, 31" },
    { src: "images/objects/spartak.jpg", title: "ТРЦ Spartak, м. Львів, вул. Мазепи, 1Б" },
    { src: "images/objects/charbel.jpg", title: "Комплекс Св. Шарбель, Моршин, вул. Вокзальна, 6" },
    { src: "images/objects/private.jpg", title: "Приватна забудова" },
    { src: "images/objects/mojo.jpg", title: "MOJO Boutique Hotel, м. Луцьк, вул. Ковельська, 16" },
    { src: "images/objects/tube.jpg", title: "Аеротруба, с. Сокільники, вул. Скнилівська, 23" },
    { src: "images/objects/leolend.jpg", title: "LEOLEND, м. Львів, вул. Мельника, 18" },
];*/

const galleryItems = [
    {
        title: "KFC, м. Львів, просп. Червоної Калини, 60",
        images: ["images/objects/kfc.jpg", "images/objects/kfc2.jpg"],
    },
    {
        title: "Hotel Maestral, м. Львів, вул. Олени Степанівни, 31",
        images: ["images/objects/maestral.jpg", "images/objects/maestral2.jpg"],
    },
    {
        title: "ТРЦ Spartak, м. Львів, вул. Мазепи, 1Б",
        images: ["images/objects/spartak.jpg", "images/objects/spartak2.jpg", "images/objects/spartak3.jpg"],
    },
    {
        title: "Комплекс Св. Шарбель, Моршин, вул. Вокзальна, 6",
        images: ["images/objects/charbel.jpg", "images/objects/charbel2.jpg"],
    },
    { images: ["images/objects/private.jpg", "images/objects/private2.jpg"], title: "Приватна забудова" },
    {
        images: ["images/objects/mojo.jpg", "images/objects/mojo2.jpg"],
        title: "MOJO Boutique Hotel, м. Луцьк, вул. Ковельська, 16",
    },
    {
        images: ["images/objects/tube.jpg", "images/objects/tube2.jpg", "images/objects/tube3.jpg"],
        title: "Аеротруба, с. Сокільники, вул. Скнилівська, 23",
    },
    {
        images: [
            "images/objects/leolend.jpg",
            "images/objects/leolend2.jpg",
            "images/objects/leolend3.jpg",
            "images/objects/leolend4.jpg",
        ],
        title: "LEOLEND, м. Львів, вул. Мельника, 18",
    },
];

let galleryIndex = 0;
let imageIndex = 0;
let galleryInstance;

function openGallery(e, index) {
    e.preventDefault();
    e.stopPropagation();
    galleryIndex = index;
    imageIndex = 0;
    showGalleryImage();
}

function showGalleryImage() {
    const item = galleryItems[galleryIndex];
    const imgSrc = item.images[imageIndex];

    galleryInstance = basicLightbox.create(
        `     
      <div class="lightbox-gallery">
       
        <img src="${imgSrc}" alt="${item.title}" />
      <p>${item.title}</p>
       <button class="gallery-prev" onclick="prevImage()">&#10094;</button>
      <button class="gallery-next" onclick="nextImage()">&#10095;</button>
      </div>
    `,
        {
            closable: true,
            onShow: () => {
                // Delay to ensure DOM is rendered
                setTimeout(() => {
                    // Add fixed close button manually to body
                    const btn = document.createElement("button");
                    btn.className = "gallery-close";
                    btn.innerHTML = "×";
                    btn.onclick = () => galleryInstance.close();
                    document.body.appendChild(btn);

                    document.addEventListener("click", closeOnOutsideClick);
                }, 10);
            },
            onClose: () => {
                document.querySelector(".gallery-close")?.remove();
                document.removeEventListener("click", closeOnOutsideClick);
            },
        }
    );

    galleryInstance.show();
}

function nextImage() {
    const images = galleryItems[galleryIndex].images;
    imageIndex = (imageIndex + 1) % images.length;
    galleryInstance.close();
    showGalleryImage();
}

function prevImage() {
    const images = galleryItems[galleryIndex].images;
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    galleryInstance.close();
    showGalleryImage();
}

function closeOnOutsideClick(e) {
    const img = document.querySelector(".lightbox-gallery img");
    if (galleryInstance.visible() && !img.contains(e.target)) {
        galleryInstance.close();
    }
}

const projectObserver = new IntersectionObserver(
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
document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add("hidden");
    projectObserver.observe(card);
});
