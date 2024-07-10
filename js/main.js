'use strict'

// Open Modal Window
const readMoreBtn = document.querySelectorAll(".read-more");
const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelectorAll(".close-modal");

// Showing Modal
function showModal() {
    modalWindow.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Clicking Read More
readMoreBtn.forEach(element => {
    element.addEventListener("click", showModal);
});

// Hiding Modal
function hideModal() {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Clicking Close Button
closeModalBtn.forEach(element => {
    element.addEventListener("click", hideModal);
});

// Clicking Outsite Modal Window
overlay.addEventListener("click", hideModal);

// Clicking Esc Button
document.addEventListener("keydown", function (e) {
    if (!modalWindow.classList.contains(".hidden") && !overlay.classList.contains(".hidden")) {
        if (e.key === "Escape") {
            hideModal();
        }
    }
});


