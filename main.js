let navMarker = document.querySelector("#navMarker");
let navLinks = document.querySelectorAll("nav a");

function indicator(element) {
    navMarker.style.left = element.offsetLeft + "px";
    navMarker.style.width = element.offsetWidth + "px";
}

// Add click event listener to update marker when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
    });
});

// On page load, set the marker based on the active link
window.addEventListener("load", () => {
    let activeLink = document.querySelector("nav a.active");
    if (activeLink) {
        indicator(activeLink);
    }
});
