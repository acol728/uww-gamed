import featured from "../data/featured.js";
import createCard from "../modules/create-card.js";
import $ from "../modules/helpers.js"

featured.forEach((el) => {
    const li = createCard(document.createTextNode(el.title), "./pictures/sample.jpg");
    $("featured-cards").append(li);
});

$('card-left-button').addEventListener("click", scrollLeft);
$('card-right-button').addEventListener("click", scrollRight);

let scrolls = 0;
const INC = 280;

function scrollRight() {
    if (scrolls * -1 + window.innerWidth > $('featured-cards').offsetWidth - INC)
        scrolls -= INC;
    else
        scrolls -= INC * 2;
    $('featured-cards').style.transform = `translateX(${scrolls}px)`;
    $('card-left-button').style.visibility = 'visible';
    if (scrolls * -1 + window.innerWidth > $('featured-cards').offsetWidth)
        $('card-right-button').style.visibility = 'hidden';
}

function scrollLeft() {
    if (scrolls < 0) {
        scrolls += INC * 2;
        if (scrolls > 0) {
            $('featured-cards').style.transform = `translateX(${0}px)`;
            scrolls = 0;
        }
        else
            $('featured-cards').style.transform = `translateX(${scrolls}px)`;
    }
    if (scrolls === 0)
        $('card-left-button').style.visibility = 'hidden';
    $('card-right-button').style.visibility = 'visible';
}