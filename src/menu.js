import { createFooter, createHeader } from "./home";

function createMain() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  menuTitle.appendChild(h1);
  menu.appendChild(menuTitle);

  const breakfast = createMeal(
                                "Breakfast",
                                "Berry Yogurt Bowl",
                                "./images/breakfast.png",
                                "Fill up before you start your day with a bowl of this berry yogurt.",
                                2);
  const lunch = createMeal(
                            "Lunch",
                            "Roasted Shrimp Bowl",
                            "./images/lunch.png",
                            "Perfect for a hearty lunch that'll keep you full and energized all day.",
                            7);
  const dinner = createMeal(
                            "Dinner",
                            "Air Fryer Falafel Salad",
                            "./images/dinner.png",
                            "Light and refreshing dinner before bedtime.",
                            5);
  
  menu.appendChild(breakfast);
  menu.appendChild(lunch);
  menu.appendChild(dinner);
  main.appendChild(menu);
  content.appendChild(main);
}


function createMeal(mealTitle, name, imageLink, dishDescription, dishPrice) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = mealTitle;
  meal.appendChild(title);
  
  const dishes = document.createElement("div");
  dishes.classList.add("dishes");

  const dish = document.createElement("div");
  dish.classList.add("dish");

  const dishName = document.createElement("div");
  dishName.classList.add("name");
  dishName.textContent = name;
  dish.appendChild(dishName);

  const image = document.createElement("div");
  image.classList.add("image");
  const img = document.createElement("img");
  img["src"] = imageLink;
  image.appendChild(img);
  dish.appendChild(image);

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = dishDescription;
  dish.appendChild(description);

  const price = document.createElement("div");
  price.classList.add("price");
  price.textContent = `Price: ${dishPrice}$`;
  dish.appendChild(price);

  dishes.appendChild(dish);
  meal.appendChild(dishes);

  return meal;
}


export default function createMenuPage() {
  createHeader();
  createMain();
  createFooter();
}