// When the user scrolls the page, execute myFunction
window.onscroll = function () {};

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    //$nav.toggleClass("bg-light", $(this).scrollTop() > 20);
  });
});
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("ul#navLink li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 170) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};
$(window).scroll(function (e) {
  var distanceScrolled = $(this).scrollTop();

  $(".hero").css("-webkit-filter", "blur(" + distanceScrolled / 60 + "px)");
  $(".bio").css("-webkit-filter", "blur(" + distanceScrolled / 40 + "px)");
  $(".exp").css("-webkit-filter", "blur(" + distanceScrolled / 25 + "px)");
});
