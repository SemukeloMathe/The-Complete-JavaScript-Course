"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
// console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

const btns = document.getElementsByClassName("btn");
// console.log(btns);

// Creating & inseting elements.
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality & analytics.";
message.innerHTML = `We use cookies for improved functionality & analytics.
    <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete elements
document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
        // message.remove();
        message.parentElement.removeChild(message);
    });

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "105%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

const height = (message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px");
// console.log(height);
document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// non-standard
console.log(logo.getAttribute("designer"));
// set attributes
logo.alt = "Beautiful miminalist logo";
console.log(logo.alt);
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("src"));
const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()