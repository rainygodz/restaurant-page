export default function createHeader() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Restaurant";
  header.appendChild(logo);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const anchorTexts = ["Home", "Menu", "Contact"];

  for (let i = 0; i < anchorTexts.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a["href"] = "#";
    a.textContent = anchorTexts[i];
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);

  header.appendChild(nav);

  content.appendChild(header);
}