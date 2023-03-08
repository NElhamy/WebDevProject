function toggleMenu() {
    let x = document.getElementsByClassName("menuItem");
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.display == "block")
            x[i].style.display = "none";
        else
            x[i].style.display = "block";
    }
}


let topNav = document.getElementById("topNav");
let sticky = topNav.offsetTop;

window.onscroll = function () { makeSticky() };

function makeSticky() {
    if (window.pageYOffset >= sticky) {
        topNav.classList.add("sticky")
    } else {
        topNav.classList.remove("sticky");
    }
}

let menuIcons = document.getElementsByClassName("menuIcon");
let searchImg = document.getElementById("searchImg");
let searchSpan = document.getElementsByClassName("searchSpan")[0];
let searchBox = document.getElementsByClassName("searchBox")[0];
let closeSearch = document.getElementById("closeSearch");

function toggleSearchBar(bool) {
    let value;
    if (bool) {
        if (searchSpan.style.display == "inline") 
            return;
        value = "none";
        searchSpan.style.marginLeft= "0";
        searchSpan.style.display = "inline";
        searchImg.style.marginLeft="0";
        searchBox.style.width = "100%";
        searchSpan.style.width = "70%";
    }
    else {
        value = "";
        searchSpan.style.marginLeft= "auto";
        searchSpan.style.display = "none";
        searchImg.style.marginLeft="auto";
        searchBox.style.width = "unset";
        searchSpan.style.width = "unset";
    }

    for (let i = 0;i<menuIcons.length;i++) {
        menuIcons[i].style.display = value;
    }

    if (bool)
        closeSearch.style.display = "";
    else 
        closeSearch.style.display = "none";

    searchImg.style.display= "";
}
