/*Fullscreen Menu*/
function overlayMenu() {
  var element = document.getElementById("fullscreenmenu");
  element.classList.toggle("showOverlay");

  var element = document.getElementById("nav-icon1");
  element.classList.toggle("open");

  var element = document.getElementById("nav-icon1");
  element.classList.toggle("white");

  var element = document.getElementById("nike-logo");
  element.classList.toggle("nike-logo-white");
}

/*Product specifications overlay*/
document.querySelector("#plus-icon").addEventListener("click", function () {
  document.querySelector(".product-specifications").classList.toggle("displaySpec");
  document.querySelector(".plus").classList.toggle("plus-close");
  document.querySelector(".shop-now-button").classList.toggle("shopNowOverlay");
  document.querySelector(".shop-btn-container").classList.toggle("btnReveal");
});

/*Hide/show product detail div after scrolling a number of pixels*/
myID = document.getElementById("productDetail");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 10) {
    myID.className = "hideProductDetail"
  } else {
    myID.className = "product-detail"
  }
};

window.addEventListener("scroll", myScrollFunc);

/*Hide Header Navigation On Scroll Down And Show On Scroll Up*/
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//  function productSpec() {
//    var element = document.getElementById("product-specifications");
//    element.classList.toggle("displaySpec");

//    var element = document.getElementById("plus-icon");
//    element.classList.toggle("plus-close");
//  }
