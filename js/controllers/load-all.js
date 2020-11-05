import createCard from "../modules/create-card.js";
import Sort from "../modules/sort.js";
import $ from "../modules/helpers.js"

function loadCards() {
    switch ($("all-dropdown").value) {
        case "Newest":
            createCards(Sort.sortDate(1));
            break;
        case "Oldest":
            createCards(Sort.sortDate(-1));
            break;
        case "Alphabetical":
            createCards(Sort.sortAlphabetical(1));
            break;
        case "ReverseAlphabetical":
            createCards(Sort.sortAlphabetical(-1));
    }
}

function createCards(gameList) {
    const list = $("all-cards");
    while (list.firstChild)
        list.removeChild(list.firstChild);
    gameList.forEach((el) => {
        const li = createCard(document.createTextNode(el.title), "./pictures/sample.jpg");
        $("all-cards").append(li);
    });
}

loadCards();
$("all-dropdown").addEventListener("change", loadCards);