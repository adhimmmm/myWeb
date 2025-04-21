// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Mobile navigation functionality
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const overlay = document.getElementById("overlay");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mainNav.classList.remove("active");
  overlay.classList.remove("active");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.getAttribute("href") === "#") return;

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Close mobile menu if open
      mainNav.classList.remove("active");
      overlay.classList.remove("active");

      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Add shadow to header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const popupContent = document.getElementById("popupContent");
  const closePopup = document.querySelector(".close-popup");

  // Function to populate popup with ALL certificates
  function populatePopup() {
    popupContent.innerHTML = "";

    // Get ALL certificate cards (both visible and hidden)
    const allCertificates = document.querySelectorAll(".services-grid .sertificate-card");

    allCertificates.forEach((cert, index) => {
      const certClone = cert.cloneNode(true);
      const certElement = document.createElement("div");
      certElement.className = "popup-certificate";

      // Update alt text if empty
      const img = certClone.querySelector("img");
      if (img && !img.alt) {
        img.alt = `Certificate ${index + 1}`;
      }

      certElement.appendChild(certClone);
      popupContent.appendChild(certElement);
    });
  }

  // Show popup
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    populatePopup();
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close popup
  function closePopupFunc() {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closePopup.addEventListener("click", closePopupFunc);
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) closePopupFunc();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopupFunc();
  });
});


//function typewriter effect
  const text = "Hello There";
  const el = document.getElementById("typewriter");
  let i = 0;
  let isDeleting = false;

  function typeLoop() {
    if (isDeleting) {
      el.textContent = text.substring(0, i--);
    } else {
      el.textContent = text.substring(0, i++);
    }

    if (i > text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000); // delay sebelum hapus
    } else if (i < 0) {
      isDeleting = false;
      setTimeout(typeLoop, 500); // delay sebelum ngetik ulang
    } else {
      setTimeout(typeLoop, 150); // kecepatan ketik/hapus
    }
  }

  typeLoop();

