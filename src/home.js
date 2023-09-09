const content = document.querySelector("#content");


function createHeader() {
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


function createMain() {
  const main = document.createElement("main");

  const left = document.createElement("div");
  left.classList.add("left");

  const text = document.createElement("div");
  text.classList.add("text");
  text.textContent = "Are you hungry?";
  
  const br1 = document.createElement("br");
  text.appendChild(br1);

  const span1 = document.createElement("span");
  span1.setAttribute("id", "big-text");
  span1.textContent = "Don't wait!";
  text.appendChild(span1);
  const br2 = document.createElement("br");
  text.appendChild(br2);
  
  const span2 = document.createElement("span");
  span2.setAttribute("id", "small-text");
  span2.textContent = "Let start to order food now";
  text.appendChild(span2);

  left.appendChild(text);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  const button = document.createElement("button");
  button.setAttribute("id", "check-menu");
  button.textContent = "Check out menu";
  btnContainer.appendChild(button);

  left.appendChild(btnContainer);

  main.appendChild(left);


  const right = document.createElement("right");
  right.classList.add("right");

  const img = document.createElement("img");
  img["src"] = "./images/dish.png";
  img["alt"] = "dish";

  right.appendChild(img);


  content.appendChild(main);

  main.appendChild(right);
}


export default function createHomePage() {
  createHeader();
  createMain();
}

export {
  createHeader,
  createMain
}