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

//sideScroller.addEventListener("wheel", (event) => {
//    event.preventDefault();
//});

// sideScroller.onscroll = function() {
//     window.scrollTo(0,window.scrollX);
//     console.log("píča")
// }


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


/************** FOOTER CURRENCY & LANGUAGUE   */


const footerLanguague = document.querySelector(".footer__bottombar__link--languague");

const footerCurrency = document.querySelector(".footer__bottombar__link--currency");

const expandmenuLanguage = document.querySelector(".footer__bottombar__expandmenu--language");

const expandmenuCurrency = document.querySelector(".footer__bottombar__expandmenu--currency");

const bottombarArrow = document.querySelector(".bottombar__arrow__up--languague");

const bottombarArrowCurrency = document.querySelector(".bottombar__arrow__up--currency");

footerLanguague.addEventListener("click", () => {

    if (window.getComputedStyle(expandmenuLanguage).display === "none") {
        expandmenuLanguage.classList.add("open__menu");
        bottombarArrow.classList.add("arrow--open");
    } else {
        expandmenuLanguage.classList.toggle("open__menu");
        bottombarArrow.classList.toggle("arrow--open")
    };
});


footerCurrency.addEventListener("click", () => {
    if (window.getComputedStyle(expandmenuCurrency).display === "none") {
        expandmenuCurrency.classList.add("open__menu")
        bottombarArrowCurrency.classList.add("arrow--open")
    } else {
        expandmenuCurrency.classList.toggle("open__menu")
        bottombarArrowCurrency.classList.toggle("arrow--open")
    }
});


//function toggleMenuOff(menuEl, arrowEl) {
//    if (!menuEl.contains(event.target)) {
//        menuEl.classList.remove("open__menu")
//        arrowEl.classList.remove("arrow--open")
//        //console.log("clicked elsewhere")
//    } 
//}
//
//document.addEventListener("click", function(event) {
//    toggleMenuOff(expandmenuLanguage, bottombarArrow);
//}) 
//
//document.addEventListener("click", function(event) {
//    toggleMenuOff(expandmenuCurrency, bottombarArrowCurrency);
//})


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
