// Number counter
const counter = document.querySelector(".stat-number");
const target = 69; // target percentage
let count = 0;
const speed = 10; // milliseconds per increment
const increment = 1; // step increment

function updateCounter() {
  if (count < target) {
    count += increment;
    if (count > target) count = target; // ensure not over
    counter.textContent = count + "%";
    setTimeout(updateCounter, speed);
  }
}
updateCounter();

// Initialize AOS once
AOS.init({
  duration: 1000, // Animation duration in ms
  offset: 120, // Distance (px) to start the animation
  once: true, // Animation should happen only once
  easing: "ease-in-out",
});

// Scroll buttons
const upBtn = document.querySelector(".up-btn");
const userBtn = document.querySelector(".user-btn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

// Show/hide buttons on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    upBtn.classList.add("show");
    userBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
    userBtn.classList.remove("show");
  }
});

// Scroll to top on button click
upBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Open modal
userBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Close modal
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// News slider
const slider = document.getElementById("newsSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slideWidth = 350; // Slide amount

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: slideWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
});
