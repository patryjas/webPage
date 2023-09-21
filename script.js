// Get a reference to the button and the navigation menu
const toggleButton = document.getElementById("toggleMenu");
const navMenu = document.querySelector("nav ul");

// Add a click event listener to the button
toggleButton.addEventListener("click", () => {
    // Toggle the visibility of the navigation menu by adding/removing the "show" class
    navMenu.classList.toggle("show");
});
