// Select the form and input
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

history.scrollRestoration = "manual";


// Handle form submission
emailForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const email = emailInput.value.trim();
  if (email) {
    console.log("Email submitted:", email);
    alert("Thank you! We'll keep you updated!");
    emailInput.value = ""; // Clear the input
  } else {
    alert("Please enter a valid email address.");
  }
});

// Ensure the page starts at the top on load
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
  

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const aboutBox = document.querySelector(".about-box");
  
    // Detect when the About Section enters the viewport
    const revealAboutSection = () => {
      const rect = aboutBox.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
      if (isVisible) {
        aboutBox.classList.add("visible"); // Add the visible class
      }
    };
  
    // Listen for scroll events
    window.addEventListener("scroll", revealAboutSection);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tile");
  
    // Detect when tiles enter the viewport
    const revealTiles = () => {
      tiles.forEach((tile) => {
        const rect = tile.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
        if (isVisible) {
          tile.classList.add("visible"); // Add the visible class
        }
      });
    };
  
    // Listen for scroll events
    window.addEventListener("scroll", revealTiles);
  
    // Initial check in case the user starts mid-scroll
    revealTiles();
  });
  