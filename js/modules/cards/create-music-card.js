export default function createCard(title, imgsrc) {
    const li = document.createElement("li");
    li.setAttribute("class", "music-card");

    const img = document.createElement("img");
    img.setAttribute("src", imgsrc);
    img.setAttribute("class", "music-card-main");

    const div = document.createElement("div");
    div.setAttribute("class", "music-card-title");
    div.appendChild(title);

    li.append(img);
    li.append(div);

    return li;
}