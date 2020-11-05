import games from "./data/games.js";
import featured from "./data/featured.js";
// import members from "./data/members.js";
import ReleaseDate from "./modules/ReleaseDate.js";


featured.forEach((el) => {
    const li = createCard(document.createTextNode(el.title), "./pictures/sample.jpg");
    document.getElementById("featured-cards").append(li);
});
sortDate(1);
document.getElementById("all-dropdown").addEventListener("change", changeSort);


function loadAll(gameList) {
    const list = document.getElementById("all-cards");
    while (list.firstChild)
        list.removeChild(list.firstChild);
    gameList.forEach((el) => {
        const li = createCard(document.createTextNode(el.title), "./pictures/sample.jpg");
        document.getElementById("all-cards").append(li);
    });
}

function createCard (title, imgsrc) {
    const li = document.createElement("li");
    li.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", imgsrc);
    img.setAttribute("class", "card-main");

    const div = document.createElement("div");
    div.setAttribute("class", "card-title");
    div.appendChild(title);

    li.append(img);
    li.append(div);

    return li;
}

// Sorting methods

function changeSort() {
    switch (document.getElementById("all-dropdown").value) {
        case "Newest":
            sortDate(1);
            break;
        case "Oldest":
            sortDate(-1);
            break;
        case "Alphabetical":
            sortAlphabetical(1);
            break;
        case "ReverseAlphabetical":
            sortAlphabetical(-1);
    }
}

function sortAlphabetical(mult) {
    const alphabetical = [...games];
    alphabetical.sort((a, b) => {
        return mult * a.title.localeCompare(b.title);
    });
    loadAll(alphabetical);
}

function sortDate(mult) {
    const newest = [...games];
    newest.sort((a, b) => {
        const date = new ReleaseDate(a.releaseDate);
        return mult * date.compare(new ReleaseDate(b.releaseDate));
    });
    loadAll(newest);
}
  