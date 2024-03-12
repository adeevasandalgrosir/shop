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

// akses gambar
let slideImages = document.querySelectorAll("img");

// akses next dan prev
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

//  akses indikator
let dots = document.querySelectorAll(".dot");

var counter = 0;

// codingan tombol next
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in-out forwards";
  if (counter >= slideImages.length-1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in-out forwards";
  indicators();
}
// codingan tombol prev
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in-out forwards";
  if (counter == 0) {
    counter = slideImages.length-1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in-out forwards";
  indicators();
};

// auto slide
function autoSliding(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();
// stop auto sliding ketika mouse di arhkan ke gambar

const container = document.querySelector('.slides');
container.addEventListener('mouseover', function(){
  clearInterval(deletInterval);
});

// ketika mouse di pindahakan dari luar gambar maka auto slidng akan berfungsi kembali
container.addEventListener('mouseout',autosliding);

// tambahakan dan hapus kelas aktif dari indikator
function indicators(){
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}
// tambahkan fitur klik pada indikator
function switchImage(currentImage){
  currentImage.classList.add('active');
  var imageId = currentImage.getAttribute('attr');
  if(imageId > counter){
  slideImages[counter].style.animation = "next1 0.5s ease-in-out forwards";
  counter = imageId;
  slideImages[counter].style.animation = "next2 0.5s ease-in-out forwards"; 
  }
  else if(imageId == counter){
    return;
  }
  else {
  slideImages[counter].style.animation = "prev1 0.5s ease-in-out forwards";
  counter = imageId;
  slideImages[counter].style.animation = "prev2 0.5s ease-in-out forwards"; 
  
  }
  indicators();
}