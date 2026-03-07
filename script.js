// -----------------------------
// Image Slider with Arrows + Dots
// -----------------------------

// Track current slide index
let index = 0;

// Grab all slide and dot elements (if they exist on this page)
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Function to show a specific slide
function showSlide(n) {
  if (slides.length === 0) return; // Skip if no slides on this page

  // Toggle active class on slides and dots
  slides.forEach((s, i) => s.classList.toggle("active", i === n));
  dots.forEach((d, i) => d.classList.toggle("active", i === n));
  index = n;
}

// Next button (only if it exists)
const nextBtn = document.querySelector(".next");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showSlide((index + 1) % slides.length);
  });
}

// Previous button (only if it exists)
const prevBtn = document.querySelector(".prev");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showSlide((index - 1 + slides.length) % slides.length);
  });
}

// Dot navigation (only if dots exist)
if (dots.length > 0) {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });
}

// Auto-slide every 3 seconds (only if slides exist)
if (slides.length > 0) {
  setInterval(() => {
    showSlide((index + 1) % slides.length);
  }, 3000);
}

// -----------------------------
// Navbar Active Link Highlight
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Get the current page filename (e.g., "menu.html")
  const currentPage = window.location.pathname.split("/").pop();
  console.log("Current page detected:", currentPage);

  // Select all navbar links with class .nav_link
  const links = document.querySelectorAll(".nav_link");
  console.log("Found links:", links);

  // Loop through each link and compare href with current page filename
  links.forEach((link) => {
    console.log("Checking link:", link.getAttribute("href"));
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add active class to the matching link
      console.log("Active added to:", link.getAttribute("href"));
    }
  });
});
