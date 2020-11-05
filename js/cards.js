let scrolls = 0;
const INC = 280;
const CARDS = 2;

function scrollRight() {
    if (scrolls * -1 + window.innerWidth > document.getElementById('featured-cards').offsetWidth - INC)
        scrolls -= INC;
    else
        scrolls -= INC * CARDS;
    document.getElementById('featured-cards').style.transform = `translateX(${scrolls}px)`;
    document.getElementById('card-left-button').style.visibility = 'visible';
    if (scrolls * -1 + window.innerWidth > document.getElementById('featured-cards').offsetWidth)
        document.getElementById('card-right-button').style.visibility = 'hidden';
}

function scrollLeft() {
    if (scrolls < 0) {
        scrolls += INC * CARDS;
        if (scrolls > 0) {
            document.getElementById('featured-cards').style.transform = `translateX(${0}px)`;
            scrolls = 0;
        }
        else
            document.getElementById('featured-cards').style.transform = `translateX(${scrolls}px)`;
    }
    if (scrolls === 0)
        document.getElementById('card-left-button').style.visibility = 'hidden';
    document.getElementById('card-right-button').style.visibility = 'visible';
}

document.getElementById('card-left-button').addEventListener("click", scrollLeft);
document.getElementById('card-right-button').addEventListener("click", scrollRight);