let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item");
    items[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + direction + items.length) % items.length;

    const container = document.querySelector(".carousel-container");
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    items[currentIndex].classList.add("active");
}
