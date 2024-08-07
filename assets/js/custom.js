(() => {
  "use strict";
  const e = document.querySelectorAll(".needs-validation");
  Array.from(e).forEach((e) => {
    e.addEventListener(
      "submit",
      (t) => {
        e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
          e.classList.add("was-validated");
      },
      !1
    );
  });
})(),
  (window.onscroll = function () {});
var info = document.getElementById("info-ctn");
$(function () {
  $(document).scroll(function () {
    $(".fixed-top");
  });
}),
  window.addEventListener("resize", () => {
    let e = 0.01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${e}px`);
  });
const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll("ul#navLink li a");
function slideFullScreen() {
  var e = document.getElementById("fullScreenDiv");
  document.getElementById("navbar").classList.add("hidden"),
    e.classList.contains("end")
      ? (e.classList.remove("end"),
        e.classList.add("start"),
        e.classList.add("right"))
      : e.classList.add("right");
}
function closeFullScreen() {
  var e = document.getElementById("fullScreenDiv");
  document.getElementById("navbar").classList.remove("hidden"),
    e.classList.remove("start"),
    e.classList.add("end"),
    e.classList.remove("right"),
    change();
}
function change() {
  var e = document.getElementById("fullScreenDiv");
  setTimeout(function () {
    e.classList.remove("end"), e.classList.add("start");
  }, 500);
}
(window.onscroll = () => {
  var e = "";
  sections.forEach((t) => {
    const r = t.offsetTop;
    scrollY >= r - 150 && (e = t.getAttribute("id"));
  }),
    navLi.forEach((t) => {
      if (
        (t.classList.remove("active"),
        t.classList.contains(e) && t.classList.add("active"),
        "aboutme" == e || "services" == e || "contact" == e)
      ) {
        var r = document.getElementById("navbar"),
          n = document.getElementsByClassName("nav-l"),
          s = document.getElementsByClassName("sign");
        r.classList.add("nav-black");
        for (let e of n) e.classList.add("black-t");
        for (let e of s) e.classList.add("sign-h"), e.classList.remove("sign");
      }
      if ("home" == e) {
        (r = document.getElementById("navbar")),
          (n = document.getElementsByClassName("nav-l")),
          (s = document.getElementsByClassName("sign-h"));
        r.classList.remove("nav-black");
        for (let e of n) e.classList.remove("black-t");
        for (let e of s) e.classList.add("sign"), e.classList.remove("sign-h");
      }
    });
}),
  $(window).scroll(function (e) {
    var t = $(this).scrollTop();
    $(".hero").css("-webkit-filter", "blur(" + t / 60 + "px)"),
      $(".bio").css("-webkit-filter", "blur(" + t / 40 + "px)"),
      $(".exp").css("-webkit-filter", "blur(" + t / 25 + "px)");
  });
var elementiDaRilevare = document.querySelectorAll(".fadein-l-row"),
  observer = new IntersectionObserver(function (e) {
    e.forEach(function (e) {
      e.isIntersecting && e.target.classList.add("animate__fadeInLeft");
    });
  });
elementiDaRilevare.forEach(function (e) {
  observer.observe(e);
});
let screenHeight = window.innerHeight,
  screenWidth = window.innerWidth;
screenWidth >= 600 &&
  (screenHeight <= 900
    ? (console.clear(),
      gsap.registerPlugin(ScrollTrigger),
      gsap.set(".blurred-ctn", { filter: "blur(10px)" }),
      gsap.to(".blurred-ctn", {
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".bento-c",
          start: "top center",
          end: "top 15% top",
          scrub: !0,
          markers: !1,
        },
      }))
    : screenHeight > 900 && screenHeight < 1051
    ? (console.log("sono ipad"),
      gsap.registerPlugin(ScrollTrigger),
      gsap.set(".blurred-ctn", { filter: "blur(10px)" }),
      gsap.to(".blurred-ctn", {
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".bento-c",
          start: "top center",
          end: "top 40% top",
          scrub: !0,
          markers: !1,
        },
      }))
    : screenHeight >= 1051 &&
      (console.log("sono pro"),
      gsap.registerPlugin(ScrollTrigger),
      gsap.set(".blurred-ctn", { filter: "blur(10px)" }),
      gsap.to(".blurred-ctn", {
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".bento-tr",
          start: "top center",
          end: "bottom center",
          scrub: !0,
          markers: !1,
        },
      }))),
  gsap.to("#animate-anything-css", {
    duration: 1,
    ease: "none",
    repeat: -1,
    rotation: 360,
  });
var test = document.getElementById("aboutme");
document.onscroll = function () {
  for (
    scrollTop = window.scrollY,
      allSec = document.getElementsByTagName("section"),
      i = 0;
    i < allSec.length;
    i++
  )
    (curSec = allSec[i]),
      (heightBefore = 0),
      i > 0 && (heightBefore = allSec[i - 1].offsetHeight / 3),
      scrollTop > curSec.offsetTop - heightBefore &&
        ((allSec = document.getElementsByTagName("section")),
        (color = curSec.getAttribute("data-color")),
        (Sec1 = allSec[2]),
        (Sec2 = allSec[3]),
        (Sec3 = allSec[4]),
        (Sec1.style.background = color),
        (Sec2.style.background = color),
        (Sec3.style.background = color));
};
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testa",
    start: "60% center",
    end: "bottom center",
    scrub: !0,
    markers: !1,
  },
});
tl2.to(".animated-el", { x: 2500 }),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".lazy-bg"),
      t = new Image();
    (t.src = "assets/images/home_wallpaper.webp"),
      (t.onload = function () {
        (e.style.backgroundImage = 'url("assets/images/home_wallpaper.webp")'),
          e.classList.remove("lazy-bg");
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("privacyBanner"),
      t = document.getElementById("acceptPrivacy"),
      r = "privacyAccepted";
    (function (e, t) {
      var r = localStorage.getItem(e);
      if (!r) return null;
      var n = JSON.parse(r);
      return new Date().getTime() > n.expiry || n.version !== t
        ? (localStorage.removeItem(e), null)
        : n.value;
    })(r, "1.0") || (e.style.display = "block"),
      t.addEventListener("click", function () {
        var t, n, s;
        (t = r),
          (n = 30),
          (s = {
            value: "true",
            version: "1.0",
            expiry: new Date().getTime() + 24 * n * 60 * 60 * 1e3,
          }),
          localStorage.setItem(t, JSON.stringify(s)),
          (e.style.display = "none");
      });
  });
