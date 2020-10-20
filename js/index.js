//--- General functionality ---\\

//Waits for document elements to be loaded before proceeding
window.onload = function () {
    var navigation = document.getElementById("navigation");
    var position = navigation.offsetTop;

    //Function that makes navigation bar stick to the top of the page after scrolling down
    function addSticky() {
        if (window.pageYOffset >= position) {
            navigation.classList.add("sticky");
        } else {
            navigation.classList.remove("sticky");
        }
    }

    window.onscroll = function () {
        addSticky()
    };
}