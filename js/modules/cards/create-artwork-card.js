export default function createCard(title, imgsrc) {
    const li = document.createElement("li");
    li.setAttribute("class", "artwork-card");

    const img = document.createElement("img");
    img.setAttribute("src", imgsrc);
    img.setAttribute("class", "artwork-card-main");

    const div = document.createElement("div");
    div.setAttribute("class", "artwork-card-title");
    div.appendChild(title);

    li.append(img);
    li.append(div);

    return li;
}