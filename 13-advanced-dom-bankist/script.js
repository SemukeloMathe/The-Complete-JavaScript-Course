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

// Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click",
    (e) => section1.scrollIntoView({ behavior: "smooth" }));

// Page navigation
// document.querySelectorAll(".nav__link").forEach(
//     function (el) {
//         el.addEventListener("click", function (e) {
//             e.preventDefault();
//             const id = this.getAttribute("href");
//             document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//         });
//     }
// );
// event delegation.
// 1. add event listener to common parent element.
// 2. determine what element created the event.
document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();
    // Matching strategy.
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
});

// Tabbed component.
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
    // Matching strategy
    const clicked = e.target.closest(".operations__tab");

    // ignore clicks where it returns null, Guard clause.
    if (!clicked) return;
    // active tabs
    tabs.forEach(t => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    // display content for active tab
    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
    );
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

// Menu fade animation.
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
        });
        logo.style.opacity = 0.5;

    }
});

nav.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = 1;
        });
        logo.style.opacity = 1;
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
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// non-standard
// console.log(logo.getAttribute("designer"));
// set attributes
// logo.alt = "Beautiful miminalist logo";
// console.log(logo.alt);
// logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("src"));
// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()

// Scrolling
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", (e) => {
//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords);

// console.log(e.target.getBoundingClientRect())
// console.log(`Current scroll (x/y)`, window.pageXOffset, window.pageYOffset);
// console.log("height/width", document.documentElement.clientHeight, document.documentElement.clientWidth);

// scrolling
// old way
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
// window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: "smooth",
// });

// modern way
//     section1.scrollIntoView({ behavior: "smooth" });
// });

// different ways of handling events.
// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//     alert("addEventListener: Great! You are reading the heading :D");
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 5000);

// old way
// h1.onmouseenter = (e) =>
// alert("addEventListener: Great! You are reading the heading :D");

const h1 = document.querySelector("h1");

// going downwards.
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "white";

// going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

// going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//     if (el !== h1) el.style.transform = "scale(0.5)";
// });
