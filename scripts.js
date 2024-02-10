const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".descontPrice");
const ButtonsumAll = document.querySelector(".sum");
const buttonFilterAll = document.querySelector(".filter-all");

let myLi = "";

function showAll(productArray) {
  myLi = "";
  productArray.forEach((products) => {
    myLi += `
      <li >
      <img src=${products.src}>
      <p>${products.name}</p>
      <p class="item-price"> ${formatCurrency(products.price)}</p>
    </li>
`;
    list.innerHTML = myLi;
  });
}

function mapAllItens() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
       <li> 
      
      <p >O valor Total dos itens é de ${formatCurrency(totalValue)}</p>
  </li 
  `;

  console.log(totalValue);
}

function filterAll() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);

  showAll(filterJustVegan);
}

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return newValue
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
ButtonsumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAll);
