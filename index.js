const arrowDownSwitch = document.querySelector(".header__link--arrow")

const arrowMenu = document.querySelector(".header__link__arrowmenu");


const rollArrowMenu = () => {
    arrowMenu.classList.toggle("header__link__arrowmenu--hidden");
    arrowDownSwitch.classList.toggle("header__link--arrow--opened");
    arrowDownSwitch.classList.toggle("header__link--hovered");
}

arrowDownSwitch.addEventListener("click", rollArrowMenu)


/// HERO INPUT

const heroInput = document.querySelector(".hero__input");
const heroInputSecondary = document.querySelector(".hero__input--secondary")
const heroSearchBar = document.querySelector(".hero__searchbar")


const focusBlue = () => {
    heroSearchBar.classList.add("hero__searchbar--focused")
}

const unFocusBlue = () => {
    heroSearchBar.classList.toggle("hero__searchbar--focused")
}


const secondaryFocusBlue = () => {
    heroInputSecondary.classList.add("hero__input--secondary--focused")
}

const secondaryunFocusBlue = () => {
    heroInputSecondary.classList.toggle("hero__input--secondary--focused")
}


heroInputSecondary.addEventListener("focus", secondaryFocusBlue)

heroInputSecondary.addEventListener("blur", secondaryunFocusBlue)

heroInput.addEventListener("focus", focusBlue);

heroInput.addEventListener("blur", unFocusBlue)


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
            reviewsWrapper.classList.add("reviews__wrapper__opacityon")
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
        faqArrows[index].classList.toggle("faq__summary__arrow--open");
    });
});


/******** FOOTER LINKS *****////


const footerLanguague = document.querySelector(".footer__bottombar__link--languague");

const footerCurrency = document.querySelector(".footer__bottombar__link--currency");

const expandmenuLanguage = document.querySelector(".footer__bottombar__expandmenu--language");

const expandmenuCurrency = document.querySelector(".footer__bottombar__expandmenu--currency");

const bottombarArrow = document.querySelector(".bottombar__arrow__up--languague");

const bottombarArrowCurrency = document.querySelector(".bottombar__arrow__up--currency");

footerLanguague.addEventListener("click", () => {

    if (window.getComputedStyle(expandmenuLanguage).display === "none") {
        expandmenuLanguage.classList.add("footer__bottombar__expandmenu--opened");
        bottombarArrow.classList.add("bottombar__arrow__up--rotate");
    } else {
        expandmenuLanguage.classList.toggle("footer__bottombar__expandmenu--opened");
        bottombarArrow.classList.toggle("bottombar__arrow__up--rotate")
    };
});


footerCurrency.addEventListener("click", () => {
    if (window.getComputedStyle(expandmenuCurrency).display === "none") {
        expandmenuCurrency.classList.add("footer__bottombar__expandmenu--opened")
        bottombarArrowCurrency.classList.add("bottombar__arrow__up--rotate")
    } else {
        expandmenuCurrency.classList.toggle("footer__bottombar__expandmenu--opened")
        bottombarArrowCurrency.classList.toggle("bottombar__arrow__up--rotate")
    }
});


/************** FOOTER CURRENCY & LANGUAGUE   */

function expandMenuSwitch(buttons, control) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            control.innerHTML = button.innerHTML;
        });
    });
}


document.addEventListener("click", function(event) {
    if (!footerLanguague.contains(event.target)) {
        expandmenuLanguage.classList.toggle("footer__bottombar__expandmenu--opened");
        bottombarArrow.classList.toggle("bottombar__arrow__up--rotate")
    }
})


const currencyButtons = document.querySelectorAll(".expandmenu__currency__button");
const currencyControl = document.querySelector(".currency__switch");
expandMenuSwitch(currencyButtons, currencyControl);

const languageButtons = document.querySelectorAll(".expandmenu__language__button");
const languageControl = document.querySelector(".language__switch");
expandMenuSwitch(languageButtons, languageControl);
