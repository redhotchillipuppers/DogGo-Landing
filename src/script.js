import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8NDhTa-qGtk-WJBp_U6xS9CfD8KgVx0",
  authDomain: "doggo-email-6d928.firebaseapp.com",
  projectId: "doggo-email-6d928",
  storageBucket: "doggo-email-6d928.firebasestorage.app",
  messagingSenderId: "954454476075",
  appId: "1:954454476075:web:f1f56b2c844215664d716e",
  measurementId: "G-YFHXPT2NC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized successfully:", app);

// Form handling
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

emailForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  try {
    await addDoc(collection(db, "emails"), {
      email,
      timestamp: new Date(),
    });
    alert("Thank you! We'll keep you updated!");
    emailInput.value = ""; // Clear the input
  } catch (error) {
    console.error("Error saving email:", error);
    alert("Something went wrong. Please try again.");
  }
});

// Scroll reveal logic
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".testing");

  const revealOnScroll = () => {
    hiddenElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Trigger reveal when 25% of the element is visible
      const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;

      if (isVisible) {
        console.log(`Revealing element: ${element.tagName}`);
        element.classList.add("visible");
        element.classList.remove("testing");
      }
    });
  };

  // Listen for scroll events
  window.addEventListener("scroll", revealOnScroll);

  // Trigger the function on page load
  revealOnScroll();
});
