//General functionality

window.onload = function () {
    var navbar = document.getElementById("navigation");
    var sticky = navbar.offsetTop;

    function addSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function () {
        addSticky()
    };
}