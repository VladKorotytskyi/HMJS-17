//1

const countItem = document.querySelectorAll(".item");
console.log(`У списку ${countItem.length} категорії.`);

const items = document.querySelectorAll(".item"); //[item1, item2]

items.forEach((item) => {
  console.log(item.querySelector("h2").textContent); //h2
  console.log(item.querySelectorAll("li").length);
});

const listEl = document.querySelector("#ingredients");

//2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

for (const ingredient of ingredients) {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  listEl.append(createItem);
}

//3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

gallery.innerHTML = images.map(({url, alt}) => {
    return `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__image"></li>`;
  })
  .join("");
