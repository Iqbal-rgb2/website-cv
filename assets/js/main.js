document.addEventListener("DOMContentLoaded", () => {
  // Toggle Dark Mode
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const saved = localStorage.getItem("darkMode") === "true";
    if (saved) {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const dark = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", dark);
      themeToggle.textContent = dark ? "☀️" : "🌙";
    });
  }

  // Toggle Hamburger Menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Klik di luar menu → tutup
    document.addEventListener("click", (e) => {
      const clickedInsideMenu =
        navLinks.contains(e.target) || menuToggle.contains(e.target);
      if (!clickedInsideMenu && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  }

  // Fade-in Sections on Scroll
  const sections = document.querySelectorAll("section");

  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // trigger awal saat halaman dimuat
});
