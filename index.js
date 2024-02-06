console.log("hello world");

const heroInput = document.querySelector(".hero__input");
const heroButton = document.querySelector(".hero__input__button");

const heroSearchBar = document.querySelector(".hero__searchbar")


const focusBlue = () => {
    heroSearchBar.style.border = "2px solid skyblue";
}

heroInput.addEventListener("focus", focusBlue);

