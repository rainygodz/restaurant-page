import { createFooter, createHeader } from "./home";

function createMain() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("div");
  title.classList.add("title");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact";
  title.appendChild(h1);
  contact.appendChild(title);

  const info = document.createElement("div");
  info.classList.add("info");
  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = "Number: +44 20 7234 3456";
  info.appendChild(number);

  const adress = document.createElement("div");
  adress.classList.add("adress");
  adress.textContent = "Adress: 49 Featherstone Street, London";
  info.appendChild(adress);

  contact.appendChild(info);

  main.appendChild(contact);

  content.appendChild(main);
}


export default function createContactPage() {
  createHeader();
  createMain();
  createFooter();
}