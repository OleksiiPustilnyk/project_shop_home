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

// Counter (лічильник)

//
function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  // функція щоб кнопка не була активна
  this.toggleButtonsState = function () {
    let count = +this.domRefs.inputField.value; // значення в інпут не менше 1 і не більше 10

    this.domRefs.decrementBtn.disabled = count <= 1; // коли товар 1 кнопка "-" не активна
    this.domRefs.incrementBtn.disabled = count >= 10; // коли товарів 10 кнопка "+" не активна
  };
  this.toggleButtonsState();

  // функція щоб кнопка "+" додавала один товар
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonsState(); // щоб кнопка не була активна
  };

  // функція щоб кнопка "-" віднімала один товар
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonsState(); // щоб кнопка не була активна
  };

  // при кліку добавити і відняти товар
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  console.log(this);
}

// найти кнопки і інпут
let counter = new Counter(
  document.querySelectorAll(".increment-button")[0],
  document.querySelectorAll(".decrement-button")[0],
  document.querySelectorAll(".product-quantity input")[0]
);

console.log(counter);
