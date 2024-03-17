function moveRandomEl(elm) {
  // Determine the screen's aspect ratio
  const aspectRatio = window.innerWidth / window.innerHeight;
  
  // Adjust the range of movement based on the aspect ratio
  let verticalLimit = 90;
  let horizontalLimit = 90;

  // If the aspect ratio indicates a short screen, reduce the vertical movement range
  if (aspectRatio > 1) { // This means the screen is wider than it is tall
      verticalLimit = 75; // Example: reduce vertical limit to 75%
  }

  // Apply random positioning within the adjusted limits
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * verticalLimit + 5) + "%";
  elm.style.left = Math.floor(Math.random() * horizontalLimit + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Listen for touchstart and mouseenter events
moveRandom.addEventListener("touchstart", function(e) {
  moveRandomEl(e.target);
  e.preventDefault(); // Prevent the default touch behavior
}, { passive: false });

moveRandom.addEventListener("mouseenter", function(e) {
  moveRandomEl(e.target);
});
