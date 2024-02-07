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

