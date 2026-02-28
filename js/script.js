(function () {
  "use strict";

  var nav = document.getElementById("nav");
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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
})();
