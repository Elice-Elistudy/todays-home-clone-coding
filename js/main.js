document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".css-1113i1f button");
  const nextButton = document.querySelector(".css-h72v4d button");
  const categoryList = document.querySelector(".css-12glnu3");
  const categoryItems = document.querySelectorAll(".css-101y6qw");
  const categoryWidth = categoryItems[0].offsetWidth;
  let currentIndex = 0;

  updateButtonVisibility();

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCategory(currentIndex);
      updateButtonVisibility();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < categoryItems.length - 1) {
      currentIndex++;
      scrollToCategory(currentIndex);
      updateButtonVisibility();
    }
  });

  function scrollToCategory(index) {
    categoryList.style.transform = `translateX(-${categoryWidth * index}px)`;
  }

  function updateButtonVisibility() {
    if (currentIndex === 0) {
      prevButton.disabled = true;
      prevButton.classList.add("disabled");
    } else {
      prevButton.disabled = false;
      prevButton.classList.remove("disabled");
    }

    if (currentIndex === categoryItems.length - 1) {
      nextButton.disabled = true;
      nextButton.classList.add("disabled");
    } else {
      nextButton.disabled = false;
      nextButton.classList.remove("disabled");
    }
  }
});
