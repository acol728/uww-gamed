import createCard from "../modules/cards/create-card.js";
import Sort from "../modules/sort.js";
import $ from "../modules/helpers.js";

import loadGame from "./load-state.js";

function loadCards() {
    switch ($("all-dropdown").value) {
        case "Newest":
            createCards(Sort.sortDate(1));
            createEvents();
            break;
        case "Oldest":
            createCards(Sort.sortDate(-1));
            createEvents();
            break;
        case "Alphabetical":
            createCards(Sort.sortAlphabetical(1));
            createEvents();
            break;
        case "ReverseAlphabetical":
            createCards(Sort.sortAlphabetical(-1));
            createEvents();
    }
}

function createEvents() {
    Array.from($("all-cards").querySelectorAll(".card")).forEach((el) => {
        el.addEventListener("click", (e) => {
            loadGame(e.target.parentElement.dataset.id);
        });
    });
}

function createCards(gameList) {
    const list = $("all-cards");
    while (list.firstChild)
        list.removeChild(list.firstChild);
    gameList.forEach((el) => {
        const li = createCard(el.title, el.id, `./pictures/games/${el.id}/thumb.jpg`);
        $("all-cards").append(li);
    });
}

loadCards();
$("all-dropdown").addEventListener("change", loadCards);