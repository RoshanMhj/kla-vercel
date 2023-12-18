/* Home page js */

var slideIndex = 0;
var isUserInteracted = false; // Flag to check user interaction
var autoPlayTimeout; // Variable to store the autoplay timeout

showSlides();

function plusSlides(n) {
  isUserInteracted = true; // Set flag to true for user interaction
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  isUserInteracted = true; // Set flag to true for user interaction
  showSlides((slideIndex = n));
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Increment index for autoplay
  if (!isUserInteracted) {
    slideIndex++;
  }

  // Check if the index is out of bounds and reset it
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  // Add the "active" class to the corresponding dot
  dots[slideIndex - 1].className += " active";

  // Clear existing timeout to prevent multiple timeouts
  clearTimeout(autoPlayTimeout);

  // Reset autoplay feature if the slide change was triggered by user interaction
  if (isUserInteracted) {
    isUserInteracted = false; // Reset the flag
  }

  // Auto-play and advance to the next slide every 3000 milliseconds (3 seconds)
  autoPlayTimeout = setTimeout(function () {
    plusSlides(1);
  }, 5000);
}

// Start autoplay when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  autoPlayTimeout = setTimeout(function () {
    plusSlides(1);
  }, 5000);
});
