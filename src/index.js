import createContactPage from "./contact";
import createHomePage from "./home";
import createMenuPage from "./menu";


const content = document.querySelector("#content");


// default page
createHomePage();
addEventListeners();


function switchToHomeTab() {
  content.innerHTML = "";
  createHomePage();
  addEventListeners();
}


function switchToMenuTab() {
  content.innerHTML = "";
  createMenuPage();
  addEventListeners();
}


function switchToContactTab() {
  content.innerHTML = "";
  createContactPage();
  addEventListeners();
}


function addEventListeners() {
  const homeBtn = document.querySelector("#Home");
  const menuBtn = document.querySelector("#Menu");
  const contactBtn = document.querySelector("#Contact");
  const checkMenuBtn = document.querySelector("#check-menu");
  homeBtn.addEventListener("click", switchToHomeTab);
  menuBtn.addEventListener("click", switchToMenuTab);
  contactBtn.addEventListener("click", switchToContactTab);
  checkMenuBtn.addEventListener("click", switchToMenuTab);
}