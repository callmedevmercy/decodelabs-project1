document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const actionBtn = document.getElementById("actionBtn");

  // Basic Mobile Navigation Interactivity State Management
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      // Minimal accessibility management
      const expanded = navMenu.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", expanded);
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", false);
        }
      }
    });
  });

  // Update active nav link based on scroll position
  window.addEventListener("scroll", () => {
    let currentSection = "";

    const sections = document.querySelectorAll(".main-section, .hero-section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  });

  // UI Action Event Handling logic
  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      // Smooth scroll to dashboard section
      const dashboardSection = document.getElementById("dashboard");
      if (dashboardSection) {
        dashboardSection.scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Welcome to the DecodeLabs Interface Phase! Layout Verified.");
      }
    });
  }
});
