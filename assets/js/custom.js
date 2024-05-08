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
    if (scrollY >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
    if (current == "aboutme" || current == "services" || current == "contact") {
      var nav = document.getElementById("navbar");
      var navl = document.getElementsByClassName("nav-l");
      var sign = document.getElementsByClassName("sign");
      nav.classList.add("nav-black");
      for (let item of navl) {
        item.classList.add("black-t");
      }
      for (let item of sign) {
        item.classList.add("sign-h");
        item.classList.remove("sign");
      }
    }
    if (current == "home") {
      var nav = document.getElementById("navbar");
      var navl = document.getElementsByClassName("nav-l");
      var sign = document.getElementsByClassName("sign-h");
      nav.classList.remove("nav-black");
      for (let item of navl) {
        item.classList.remove("black-t");
      }
      for (let item of sign) {
        item.classList.add("sign");
        item.classList.remove("sign-h");
      }
      //navl.classList.add("white");

      //navl.item(1).classList.add("white");
    }
  });
};
$(window).scroll(function (e) {
  var distanceScrolled = $(this).scrollTop();

  $(".hero").css("-webkit-filter", "blur(" + distanceScrolled / 60 + "px)");
  $(".bio").css("-webkit-filter", "blur(" + distanceScrolled / 40 + "px)");
  $(".exp").css("-webkit-filter", "blur(" + distanceScrolled / 25 + "px)");
});
function slideFullScreen() {
  var div = document.getElementById("fullScreenDiv");
  var nav = document.getElementById("navbar");
  nav.classList.add("hidden");
  if (div.classList.contains("end")) {
    div.classList.remove("end");
    div.classList.add("start");
    div.classList.add("right");
  } else {
    div.classList.add("right");
  }
}

function closeFullScreen() {
  var div = document.getElementById("fullScreenDiv");
  var nav = document.getElementById("navbar");
  nav.classList.remove("hidden");
  div.classList.remove("start");
  div.classList.add("end");
  div.classList.remove("right");
  change();
}

function change() {
  var div = document.getElementById("fullScreenDiv");
  setTimeout(function () {
    // Codice da eseguire dopo 0.5 secondi
    div.classList.remove("end");
    div.classList.add("start");
  }, 500); // 500 millisecondi equivalgono a 0.5 secondi
}

var elementiDaRilevare = document.querySelectorAll(".fadein-l-row");

// Crea un nuovo oggetto Intersection Observer con una funzione di callback
var observer = new IntersectionObserver(function (entries) {
  // Loop attraverso le voci (entries)
  entries.forEach(function (entry) {
    // Se l'elemento è visibile
    if (entry.isIntersecting) {
      //entry.target.classList.remove("animate__fadeOutRight");
      entry.target.classList.add("animate__fadeInLeft");
      // Esegui azioni o animazioni qui
    } else {
      entry.target.classList.remove("animate__fadeInLeft");
      //entry.target.classList.add("animate__fadeOutRight");
    }
  });
});

// Aggiungi tutti gli elementi al monitoraggio dell'Observer
elementiDaRilevare.forEach(function (elemento) {
  observer.observe(elemento);
});
/*------------------------------
Register plugins
------------------------------*/
//gsap.registerPlugin(ScrollTrigger);

/*------------------------------
Init ScrollSmoother
------------------------------*/
/*ScrollTrigger.normalizeScroll(false);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".accordions",
    pin: true,
    start: "top 20% top",
    end: "bottom top",
    scrub: 1,
    ease: "linear",
  },
});

tl.to(".accordion .text", {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: 0.5,
});
tl.to(
  ".accordion",
  {
    marginBottom: -15,
    stagger: 0.5,
  },
  "<"
);*/
/*------------------------------
GSAP
------------------------------*/
var test = document.getElementById("aboutme");

document.onscroll = function () {
  scrollTop = window.scrollY;

  allSec = document.getElementsByTagName("section");

  for (i = 0; i < allSec.length; i++) {
    curSec = allSec[i];

    // The code below makes the background color change when the 						scroll top passes the 2/3 of the previous div.

    heightBefore = 0;
    if (i > 0) {
      heightBefore = allSec[i - 1].offsetHeight / 3;
    }

    if (scrollTop > curSec.offsetTop - heightBefore) {
      allSec = document.getElementsByTagName("section");

      color = curSec.getAttribute("data-color");
      Sec1 = allSec[2];
      Sec2 = allSec[3];
      Sec3 = allSec[4];
      Sec1.style.background = color;
      Sec2.style.background = color;
      Sec3.style.background = color;
      //curSec.style.background = color;
    }
  }
};
