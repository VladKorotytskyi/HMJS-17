const countItem = document.querySelectorAll('.item');
console.log(`У списку ${countItem.length} категорії.`);

const items = document.querySelectorAll('.item')//[item1, item2]

items.forEach((item) => {
  console.log(item.querySelector('h2').textContent); //h2
  console.log(item.querySelectorAll('li').length);
});

