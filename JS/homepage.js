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
