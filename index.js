console.log("hello world");

const heroInput = document.querySelector(".hero__input");
const searchBar = document.querySelector(".hero__searchbar")
 
 
const highlightInput = (searchBar) => {

    console.log("lurvosyn");
    searchBar.style.outline = "2px solid blue";
}

const toggletInput = (event) => {

    console.log("kokot")

    if (event.target === searchBar && searchBar.style.outline === "2px solid blue") {
        searchBar.style.border = "none";
    } 
}


heroInput.addEventListener("click", highlightInput);

document.addEventListener("click", toggletInput);

