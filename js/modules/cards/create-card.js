export default function createCard(title, id, imgsrc) {
    const li = document.createElement("li");
    li.setAttribute("class", "card");
    li.setAttribute("data-id", id);

    const img = document.createElement("img");
    img.setAttribute("src", imgsrc);
    img.setAttribute("class", "card-main");

    const div = document.createElement("div");
    div.setAttribute("class", "card-title");
    div.appendChild(document.createTextNode(title));

    li.append(img);
    li.append(div);

    return li;
}