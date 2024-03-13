const arrowDownSwitch = document.querySelector(".header__link--arrow")

const arrowMenu = document.querySelector(".header__link__arrowmenu");


const rollArrowMenu = () => {
    arrowMenu.classList.toggle("header__link__arrowmenu--hidden");
    arrowDownSwitch.classList.toggle("header__link--arrow--opened");
    arrowDownSwitch.classList.toggle("header__link--hoverable");
}

arrowDownSwitch.addEventListener("click", rollArrowMenu)

/// HERO INPUT

const input = document.querySelector(".input");
const inputSecondary = document.querySelector(".input--secondary")
const searchBar = document.querySelector(".searchbar")


const focusBlue = () => {
    searchBar.classList.add("searchbar--focused")
}

const unFocusBlue = () => {
    searchBar.classList.toggle("searchbar--focused")
}

const secondaryFocusBlue = () => {
    inputSecondary.classList.add("input--secondary--focused")
}

const secondaryunFocusBlue = () => {
    inputSecondary.classList.toggle("input--secondary--focused")
}

inputSecondary.addEventListener("focus", secondaryFocusBlue)

inputSecondary.addEventListener("blur", secondaryunFocusBlue)

input.addEventListener("focus", focusBlue);

input.addEventListener("blur", unFocusBlue)

/* REVIEWS SECTION APPEARING *****************/

const reviewsWrapper = document.querySelector(".reviews__wrapper");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            reviewsWrapper.classList.add("reviews__wrapper--opacityon")
        }
    })
}, options);

observer.observe(reviewsWrapper);

/// REVIEWS SIDESCROLLER

const sideScroller = document.querySelector(".reviews__box__wrapper");

const controlButtonLeft = document.querySelector(".review__control__button--left").addEventListener("click", (event) => {
    sideScroller.scrollLeft -= 200;
});

const controlButtonRight = document.querySelector(".review__control__button--right").addEventListener("click", (event) => {
    sideScroller.scrollLeft += 200;
});

////  FAQ ARROWS... 

const faqDetails = document.querySelectorAll(".faq__details");
const faqArrows = document.querySelectorAll(".faq__summary__arrow");

faqDetails.forEach((faqDetail, index) => {
    faqDetail.addEventListener("click", (event) => {
        faqArrows[index].classList.toggle("arrow--open");
    });
});

/************** FOOTER CURRENCY & LANGUAGUE EXPANDMENUS  */

function expandableMenuSwitch(event) {

    const clickedElement = event.target;

    expandableLinks.forEach((expandableLink) => {

        if (expandableLink.contains(clickedElement)) {
            expandableLink.nextElementSibling.classList.toggle("open__menu");
            expandableLink.children[1].classList.toggle("arrow--open");
        } else {
            expandableLink.nextElementSibling.classList.remove("open__menu");
            expandableLink.children[1].classList.remove("arrow--open");
        }
    })
}

const expandableLinks = document.querySelectorAll(".footer__bottombar__link");

document.addEventListener("click", expandableMenuSwitch);

/******* CHANGING CURRENCY AND LANGUAGUE LINKS */

function expandMenuSwitch(buttons, control) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            control.innerHTML = button.innerHTML;
        });
    });
}

const currencyButtons = document.querySelectorAll(".expandmenu__currency__button");
const currencyControl = document.querySelector(".currency__switch");
expandMenuSwitch(currencyButtons, currencyControl);

const languageButtons = document.querySelectorAll(".expandmenu__language__button");
const languageControl = document.querySelector(".language__switch");
expandMenuSwitch(languageButtons, languageControl);
