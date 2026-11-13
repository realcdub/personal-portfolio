/*
    Section: Dark Mode Light Mode
    Prompt:
    Integrate a dark mode light button on the top right of the screen, within the navigation. 
    Create two separate buttons for both the light mode and dark mode images in the images folder. 
    However, ensure that they are on a shared background and when one is pressed, it is given a distinctive color on the background to show which one is currently selected. 
    When the screen is not wide enough to display the entire navigation, ensure that the button is available in the dropdown of the navigation. 
*/
const navigation = document.querySelector("nav");
const menuButton = document.querySelector("#menu-button");
const themeButtons = document.querySelectorAll(".theme-button");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navigation.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.focus();
    }
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const theme = button.dataset.themeChoice;
        document.documentElement.dataset.theme = theme;
        themeButtons.forEach((themeButton) => {
            themeButton.setAttribute("aria-pressed", String(themeButton === button));
        });
    });
});

ScrollReveal().reveal(".project-card", {
    distance: "50px",
    duration: 800,
    easing: "ease-in-out",
    origin: "bottom",
    reset: true
});