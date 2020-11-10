export default function createCredits(author) {
    const li = document.createElement("li");
    li.setAttribute("class", "credits-card");

    const h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(author.name));

    const a = document.createElement("a");
    a.setAttribute("class", "twitter unselectable");
    a.setAttribute("href", `https://twitter.com/${author.twitter}`);
    a.setAttribute("target", "_blank");
    a.appendChild(document.createTextNode((author.twitter === "") ? "" : "@" + author.twitter));

    li.appendChild(h3);
    li.appendChild(a);

    author.roles.forEach(role => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(role));
        li.appendChild(p);
    })

    return li;
}