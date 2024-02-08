console.log("hello world");

const heroInput = document.querySelector(".hero__input");
const heroSearchBar = document.querySelector(".hero__searchbar")

const focusBlue = () => {
    //heroSearchBar.style.border = "2px solid blue";
    heroSearchBar.classList.add("hero__searchbar--focused")
    console.log("lolo")
}

const unFocusBlue = () => {
    heroSearchBar.classList.toggle("hero__searchbar--focused")
}


heroInput.addEventListener("focus", focusBlue);

heroInput.addEventListener("blur", unFocusBlue)



const sideScroller = document.querySelector(".reviews__box__wrapper");

sideScroller.addEventListener("wheel", (event) => {
    event.preventDefault();
});


const controlButtonLeft = document.querySelector(".review__control__button--left").addEventListener("click", (event) => {
    sideScroller.scrollLeft -= 200;
});

const controlButtonRight = document.querySelector(".review__control__button--right").addEventListener("click", (event) => {
    sideScroller.scrollLeft += 200;
});




