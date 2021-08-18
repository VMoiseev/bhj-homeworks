const increase = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const decrease = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const cart = document.querySelector(".cart__products");
const buttonsForAdd = Array.from(document.querySelectorAll(".product__add"));

const additionProduct = function() {
  this.previousElementSibling.textContent = Number(this.previousElementSibling.textContent) + 1;
}

increase.forEach(item => {item.addEventListener("click", additionProduct)});

const addProductCart = function() {
  const listProducts = Array.from(cart.querySelectorAll(".cart__product"));
  const quantity = this.closest(".product").querySelector(".product__quantity-value").textContent;
  const idOfProduct = this.closest(".product").getAttribute("data-id");
  const srcOfProduct = this.closest(".product").querySelector(".product__image").getAttribute("src");
  const index = listProducts.findIndex(item => item.getAttribute("data-id") === idOfProduct);

  if (index !== -1) {
    listProducts[index].querySelector(".cart__product-count").textContent = Number(listProducts[index].querySelector(".cart__product-count").textContent) + Number(quantity);
  } else {
    cart.innerHTML += `
    <div class="cart__product" data-id="${idOfProduct}">
      <img class="cart__product-image" src="${srcOfProduct}">
      <div class="cart__product-count">${quantity}</div>
    </div>
    `;
  }

  this.closest(".product").querySelector(".product__quantity-value").textContent = 1;
}

buttonsForAdd.forEach(item => {item.addEventListener("click", addProductCart)});

const removalProducts = function() {
  const previousQuantity = Number(this.nextElementSibling.textContent);

  if (previousQuantity !== 1) {
    this.nextElementSibling.textContent = previousQuantity - 1;
  }
}

decrease.forEach(item => {item.addEventListener("click", removalProducts)});