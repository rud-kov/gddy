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

