// Simple hamburger toggle for mobile nav
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    // toggle visibility with accessible changes
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    } else {
      nav.style.display = "flex";
      burger.setAttribute("aria-expanded", "true");
    }
  });

  // Close nav when clicking outside (small improvement)
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && window.innerWidth < 640) {
      nav.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // ensure nav visibility is correct on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
