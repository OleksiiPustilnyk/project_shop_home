// add to cart

let productCountEl = document.getElementById("products-count");
console.log(productCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     let prevProductsCount = +productCountEl.textContent;
//     // console.log(prevProductsCount);
//     // productCountEl.textContent = +productCountEl.textContent + 1;
//   });
// }

addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productCountEl.textContent = +productCountEl.textContent + 1;
  });
});
