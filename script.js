// 1. Number counter animation
const counter = document.querySelector(".stat-number");
const target = 69; // target percentage
let count = 0;
const speed = 15; // milliseconds per increment
const increment = 1;

function updateCounter() {
  if (!counter) return;
  if (count < target) {
    count += increment;
    if (count > target) count = target;
    counter.textContent = count + "%";
    setTimeout(updateCounter, speed);
  }
}
updateCounter();

// 2. Initialize AOS safely
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    offset: 80,
    once: true,
    easing: "ease-in-out",
  });
}

// 3. Mobile & Tablet Navigation Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const primaryNav = document.getElementById("primaryNav");
const secondaryNav = document.getElementById("secondaryNav");
const headerActions = document.getElementById("headerActions");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = primaryNav && primaryNav.classList.toggle("nav-open");
    if (secondaryNav) secondaryNav.classList.toggle("nav-open");
    if (headerActions) headerActions.classList.toggle("nav-open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

    const icon = mobileMenuBtn.querySelector("i");
    if (icon) {
      icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
  });
}

// Make entire Student Login button clickable
const studentLoginBox = document.querySelector(".student-login");
if (studentLoginBox) {
  studentLoginBox.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "a") {
      window.location.href = "./login.html";
    }
  });
}

// 4. Coming Soon Modal Logic (for all navbar links & interactive elements)
const comingSoonModal = document.getElementById("comingSoonModal");
const comingSoonTitle = document.getElementById("comingSoonTitle");
const comingSoonDesc = document.getElementById("comingSoonDesc");
const closeComingSoonBtn = document.getElementById("closeComingSoonBtn");
const okComingSoonBtn = document.getElementById("okComingSoonBtn");

function showComingSoon(featureName) {
  if (!comingSoonModal) return;

  const cleanName = (featureName || "This Section")
    .replace(/▾/g, "")
    .replace(/»/g, "")
    .replace(/●/g, "")
    .trim();

  if (comingSoonTitle) {
    comingSoonTitle.textContent = `${cleanName} — Coming Soon!`;
  }
  if (comingSoonDesc) {
    comingSoonDesc.textContent = `The "${cleanName}" section of St. Xavier's College Umoid is currently under development and will be launching soon. Stay tuned!`;
  }

  // Re-trigger pop animation every time it is shown
  const card = comingSoonModal.querySelector(".coming-soon-card");
  if (card) {
    card.style.animation = "none";
    void card.offsetWidth; // trigger reflow
    card.style.animation = "";
  }

  comingSoonModal.classList.add("active");
}

function hideComingSoon() {
  if (!comingSoonModal) return;
  comingSoonModal.classList.remove("active");
}

if (closeComingSoonBtn) {
  closeComingSoonBtn.addEventListener("click", hideComingSoon);
}
if (okComingSoonBtn) {
  okComingSoonBtn.addEventListener("click", hideComingSoon);
}
if (comingSoonModal) {
  comingSoonModal.addEventListener("click", (e) => {
    if (
      e.target === comingSoonModal ||
      e.target.classList.contains("coming-soon-backdrop")
    ) {
      hideComingSoon();
    }
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideComingSoon();
  }
});

// Attach Coming Soon handler to all navbar links, [data-coming-soon], and href="#" links
document.addEventListener("click", (e) => {
  const trigger = e.target.closest(
    'nav a, .top-bar a, [data-coming-soon], a[href="#"]'
  );
  if (!trigger) return;

  const href = trigger.getAttribute("href");
  // Allow real page links like ./login.html or ./index.html unless marked data-coming-soon
  if (
    href &&
    href !== "#" &&
    !href.startsWith("javascript:") &&
    !trigger.hasAttribute("data-coming-soon")
  ) {
    return;
  }

  e.preventDefault();

  // If clicking a dropdown parent in secondary nav on mobile/tablet, also toggle its submenu
  const parentDropdown = trigger.closest(".dropdown");
  if (parentDropdown && trigger.classList.contains("abb")) {
    parentDropdown.classList.toggle("open");
  }

  const label =
    trigger.getAttribute("data-coming-soon") ||
    trigger.textContent ||
    trigger.getAttribute("aria-label") ||
    "Feature";

  showComingSoon(label);
});

// Handle Hero Application Form submit
const heroApplicationForm = document.getElementById("heroApplicationForm");
if (heroApplicationForm) {
  heroApplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showComingSoon("Online Application Portal");
  });
}

// 5. Scroll-to-top button
const upBtn = document.querySelector(".up-btn");
const userBtn = document.querySelector(".user-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (upBtn) upBtn.classList.add("show");
    if (userBtn) userBtn.classList.add("show");
  } else {
    if (upBtn) upBtn.classList.remove("show");
    if (userBtn) userBtn.classList.remove("show");
  }
});

if (upBtn) {
  upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
