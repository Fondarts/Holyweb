 (function () {
  "use strict";

  var nav = document.getElementById("nav");
  if (nav) {
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var id = href.slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  var phone2 = document.querySelector(".hero-phone--2");
  var phone3 = document.querySelector(".hero-phone--3");
  var trigger2 = document.querySelector(".hero-phone-trigger--2");
  var trigger3 = document.querySelector(".hero-phone-trigger--3");

  if (phone2 && trigger2) {
    trigger2.addEventListener("mouseenter", function () {
      phone2.classList.add("hero-phone--hover");
    });
    trigger2.addEventListener("mouseleave", function () {
      phone2.classList.remove("hero-phone--hover");
    });
  }

  if (phone3 && trigger3) {
    trigger3.addEventListener("mouseenter", function () {
      phone3.classList.add("hero-phone--hover");
    });
    trigger3.addEventListener("mouseleave", function () {
      phone3.classList.remove("hero-phone--hover");
    });
  }
 })();
