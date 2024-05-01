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
      nav.classList.add("nav-black");
    }
    if (current == "home") {
      var nav = document.getElementById("navbar");
      nav.classList.remove("nav-black");
    }
    console.log(current);
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
var larghezzaSchermo = window.innerWidth;
if (larghezzaSchermo > 600) {
  var elementiDaRilevare = document.querySelectorAll(".fadein-l-row");
} else {
  var elementiDaRilevare = document.querySelectorAll(".fadein-l");
}
// Crea un nuovo oggetto Intersection Observer con una funzione di callback
var observer = new IntersectionObserver(function (entries) {
  // Loop attraverso le voci (entries)
  entries.forEach(function (entry) {
    // Se l'elemento è visibile
    /*if (entry.isIntersecting) {
      entry.target.classList.remove("animate__fadeOutRight");
      entry.target.classList.add("animate__fadeInLeft");
      // Esegui azioni o animazioni qui
    } else {
      entry.target.classList.remove("animate__fadeInLeft");
      entry.target.classList.add("animate__fadeOutRight");
    }*/
  });
});

// Aggiungi tutti gli elementi al monitoraggio dell'Observer
elementiDaRilevare.forEach(function (elemento) {
  observer.observe(elemento);
});
/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger);

/*------------------------------
Init ScrollSmoother
------------------------------*/
ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ ignoreMobileResize: true });

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
);
