const arrowDownSwitch = document.querySelector(".header__link__button--arrow")

const arrowMenu = document.querySelector(".header__link__arrowmenu");

const arrowLi = document.querySelector(".arrow__li");


const rollArrowMenu = () => {
    arrowMenu.classList.toggle("header__link__arrowmenu--hidden");
    arrowDownSwitch.classList.toggle("header__link__button--arrow--opened");
    arrowLi.classList.toggle("header__link--hoverable");
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
            buttons.forEach((otherButton) => {
                if (otherButton != button) {
                    otherButton.classList.remove("expandmenu__currency__button--selected", "expandmenu__language__button--selected")
                }
            })
            control.innerHTML = button.innerHTML;

            if (button.classList.contains("expandmenu__currency__button")) {
                button.classList.add("expandmenu__currency__button--selected");
            } else {
                button.classList.add("expandmenu__language__button--selected");
            }
        });
    });
}

const currencyButtons = document.querySelectorAll(".expandmenu__currency__button");
const currencyControl = document.querySelector(".currency__switch");
expandMenuSwitch(currencyButtons, currencyControl);


const languageButtons = document.querySelectorAll(".expandmenu__language__button");
const languageControl = document.querySelector(".language__switch");
expandMenuSwitch(languageButtons, languageControl);


/***** HAMBURGER MENU */

const body = document.querySelector(".body");

const hamburgerSwitches = document.querySelectorAll(".ham__switch");

hamburgerSwitches.forEach((hamburgerSwitch) => {
    hamburgerSwitch.addEventListener("click", function(event) {
        hamburgerMenu.classList.toggle("hamburger__menu--opened");
        body.classList.toggle("body__hamburger__on")
    })
});

const insideHamSwitches = document.querySelectorAll(".hamburger__link__button--arrow");

insideHamSwitches.forEach((insideHamSwitch) => {
    insideHamSwitch.addEventListener("click", function(event) {
        insideHamSwitch.nextElementSibling.classList.add("hamburger__insidemenu--open");
    })
});


const secondLevelMenuSwitches = document.querySelectorAll(".insidemenu__chevron");

secondLevelMenuSwitches.forEach((secondLevelMenuSwitch) => {
    secondLevelMenuSwitch.addEventListener("click", function(event) {        
        secondLevelMenuSwitch.closest(".hamburger__insidemenu").classList.remove("hamburger__insidemenu--open");
    })
});

/***** QUERRIES FOR SWITCHING OF HAMB. ETC. */

const mediaQuery = window.matchMedia('(min-width:1200px)')

function switchHamb() {
    if (mediaQuery.matches) {
        body.classList.remove("body__hamburger__on");
    }
}

mediaQuery.addEventListener("change", switchHamb);

const hamburgerMenu = document.querySelector(".hamburger__menu");
