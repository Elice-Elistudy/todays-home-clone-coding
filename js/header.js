document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".write-button");
  const placementBottom = document.querySelector(".placement-bottom");

  button.addEventListener("click", function() {
      if (placementBottom.style.display === "none" || placementBottom.style.display === "") {
          placementBottom.style.display = "block";
      } else {
          placementBottom.style.display = "none";
      }
  });
});