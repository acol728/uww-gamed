import $ from "./modules/helpers.js";

window.onload = () => {
    var navigation = $("navigation");
    var position = navigation.offsetTop;

    function addSticky() {
        if (window.pageYOffset >= position) {
            navigation.classList.add("sticky");
        } else {
            navigation.classList.remove("sticky");
        }
    }

    window.onscroll = function () {
        addSticky();
    }
}