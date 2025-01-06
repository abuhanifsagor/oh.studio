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

  document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    // Check if the preloader has already been shown
    const hasLoadedBefore = localStorage.getItem("hasLoaded");

    if (!hasLoadedBefore) {
      // Show the preloader and wait for the page to fully load
      window.addEventListener("load", function () {
        preloader.style.display = "none"; // Hide the preloader
        localStorage.setItem("hasLoaded", "true"); // Mark as loaded in localStorage
      });
    } else {
      // Immediately hide the preloader if it has already been shown before
      preloader.style.display = "none";
    }
  });

