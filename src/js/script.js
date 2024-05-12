// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchBox = document.querySelector("#search-box");
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector("#search-btn");

searchButton.onclick = (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartBtn = document.querySelector("#shopping-cart-btn");

shoppingCartBtn.onclick = (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
};

// klik diluar element

document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modalbox
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "flex";
  };
});

// tombol close modal
const closeIcon = document.querySelector(".close-icon");
closeIcon.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
