// JavaScript functionality for a personal portfolio website

// Smooth Scrolling Functionality
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Responsive Navigation Menu Toggle
const navToggle = document.createElement("button");
navToggle.innerText = "☰";
navToggle.classList.add("nav-toggle");

document.querySelector("header nav").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("show-nav");
});

// Close navigation menu after clicking a link (for mobile devices)
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("header nav ul").classList.remove("show-nav");
  });
});
