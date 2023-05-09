// ADD TO CART
//
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
//
//
//
//
// LIKE
//
let lekeBtns = document.querySelectorAll(".like");
console.log(lekeBtns);

// 1 спосіб (в html треба додати один клас liked біля класу like)
// lekeBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     if (item.classList.contains("liked")) {
//       item.classList.remove("liked");
//     } else {
//       item.classList.add("liked");
//     }
//   });
// });

// 2 спосіб
lekeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});
//
//
//
//
// МОДАЛЬНЕ ВІКНО
//
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
// console.log(moreDetailsBtns);
// console.log(modal);

// робимо вікно видиме і не видиме
// moreDetailsBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
//   });
// });

// або так (код більш читабельний)
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

// кнопка закрити
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

// закривати коли нажати не на кнопку закрити
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// при натисканні на ESC
// не працює
// modal.addEventListener("keydown", function (e) {
//   if (e.code === "Escape") {
//     closeModal();
//   }
// });

// slick (слайдер)
$(".slider").slick({
  dots: true,
});
