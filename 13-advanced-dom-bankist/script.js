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

btnScrollTo.addEventListener("click", (e) =>
    section1.scrollIntoView({ behavior: "smooth" })
);

// Page navigation
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
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    // display content for active tab
    tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
    );
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

// Menu fade animation.
const nav = document.querySelector(".nav");
const handleHover = function (e) {
    if (e.target.classList.contains("nav__link")) {
        const link = e.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

// Passing argument into handler.
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation: Intersection Observer API
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect();

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight.height}px`,
});
headerObserver.observe(header);

// Reveal sections as you scroll.
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    // section.classList.add("section--hidden");
});

// Lazy loading images.
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// Slider
const slider = function () {
    const slides = document.querySelectorAll(".slide");
    // const slider = document.querySelector(".slider");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");
    let curSlide = 0;
    const maxSlide = slides.length;

    // functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                "beforeend",
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll(".dots__dot")
            .forEach((dot) => dot.classList.remove("dots__dot--active"));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    // prev slide
    const prevSlide = function () {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        createDots();
        activateDot(0);
        goToSlide(0);
    };

    init();
    // event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    // attaching keyboard events
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });

    dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// const btns = document.getElementsByClassName("btn");
// console.log(btns);

// Creating & inseting elements.
// .insertAdjacentHTML
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality & analytics.";
// message.innerHTML = `We use cookies for improved functionality & analytics.
//     <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete elements
// document
//     .querySelector(".btn--close-cookie")
//     .addEventListener("click", function () {
//         // message.remove();
//         message.parentElement.removeChild(message);
//     });

// Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "105%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// const height = (message.style.height =
//     Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px");
// // console.log(height);
// document.documentElement.style.setProperty("--color-primary", "orangered");

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

// const h1 = document.querySelector("h1");

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

// sticky navigation.
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function (e) {
//     // console.log(window.scrollY);
//     if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//     else nav.classList.remove("sticky");
// });

// const obsCallback = function (entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// };

// const obsOptions = {
//     root: null,
//     threshold: [0,0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
