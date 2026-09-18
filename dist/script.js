/* Mobile navigation: opens and closes the menu on small screens. */
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

/* Booking demo: validates the form and explains that no data is sent in Version 1. */
const bookingForm = document.querySelector("#booking-form");
const formStatus = document.querySelector("#form-status");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const clientName = document.querySelector("#name").value.trim();
  formStatus.textContent = `Thanks, ${clientName}. This demo is ready to connect to a booking service in a future version.`;
  bookingForm.reset();
});

/* Small interface touches: current year and gentle reveal-on-scroll motion. */
document.querySelector("#current-year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));
