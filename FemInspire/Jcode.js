//Sticky navbar code
window.onscroll = function() {Navbar()};

//Get the navbar
var navbar = document.getElementById("navbar");

//Offset position of the navbar
var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position
//Remove sticky when you leave the scroll position
function Navbar(){
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}
