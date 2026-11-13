
// 1. MOBILE NAVIGATION MENU

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });

});


// 2. DARK MODE / LIGHT MODE

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// 3. DESTINATION SEARCH

const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();
    let visibleCount = 0;

    cards.forEach(function(card) {

        const destination = card.dataset.name;

        if(destination.includes(searchValue)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    noResults.hidden = visibleCount !== 0;

});


// 4. DESTINATION BUTTON INTERACTION

document.querySelectorAll(".details-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const place = button.dataset.place;

        alert("Welcome! You selected " + place + ".");

    });

});


// 5. CONTACT FORM VALIDATION

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        return;

    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        return;

    }

    formMessage.textContent =
        "Thank you, " + name + "! Your message is ready.";

    contactForm.reset();

});
