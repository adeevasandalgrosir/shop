// Toogle class active
const navbarNav = document.querySelector(".navbar-list");

// Ketika hamburger menu di klik
document.querySelector("#sidebar-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika klik di luar side bar maka menu side barnya hilang
const hamburger = document.querySelector("#sidebar-menu");

// ketika klik dimanapun maka side barnya hilang
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toogel class show scroll list
const navbarScroll = document.querySelector('.sidebar');

// ketika arrow right di klik 
document.querySelector("#icon").onclick = () => {
  navbarScroll.classList.toggle("show");
};

// ketika diklik dimanapun scoll listny hilang 
const arrow = document.querySelector("#icon");

document.addEventListener("click", function(e){
  if (!arrow.contains(e.target) && !navbarScroll.contains(e.target)) {
    navbarScroll.classList.remove("show");
  }
});