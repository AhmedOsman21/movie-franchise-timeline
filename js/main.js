'use strict'

// Open Modal Window
const readMoreBtn = document.querySelectorAll(".read-more");
const modalWindow = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const closeModalBtn = document.querySelectorAll(".close-modal");

// Showing Modal
function show(element, index) {
    element[index].classList.remove("hidden");
}

// Clicking Read More Button
readMoreBtn.forEach((element, index) => {
    element.addEventListener("click", function () {
        const modalToShow = document.querySelector(`.${element.id}`);
        if (modalToShow) {
            modalToShow.classList.remove("hidden");
        }
        if (overlay[index]) {
            show(overlay, index);
        }
    })
});

// Hiding Modal
function hideElement(element, index) {
    element[index].classList.add("hidden");
}

function closeOnClick(clickableItem) {
    clickableItem.forEach((element, index) => {
        element.addEventListener("click", function () {
            if (!modalWindow[index].classList.contains(".hidden")) {
                hideElement(modalWindow, index);
                hideElement(overlay, index);
            }
        });
    })
}

// Clicking close button
closeOnClick(closeModalBtn);

// Clicking outside modal
closeOnClick(overlay);

// Clicking Esc Button
document.addEventListener("keydown", function (e) {
    modalWindow.forEach((element, index) => {
        if (!element.classList.contains(".hidden") && !overlay[index].classList.contains(".hidden")) {
            if (e.key === "Escape") {
                hideElement(modalWindow, index);
                hideElement(overlay, index);
            }
        }
    });
});
