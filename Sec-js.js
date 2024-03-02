document.addEventListener("DOMContentLoaded", function() {
  // Add event listeners to buttons
  document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() {
      // Perform action based on button clicked
      var action = button.textContent.toLowerCase().replace(/\s+/g, "_");
      alert("Perform action: " + action);
    });
  });
});