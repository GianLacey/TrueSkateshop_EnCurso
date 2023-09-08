document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".multicarousel");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function updateArrowsVisibility() {
    const itemsPerPage = calculateItemsPerPage();
    prevButton.style.display = currentIndex === 0 ? "none" : "block";
    nextButton.style.display =
      currentIndex >= carousel.children.length - itemsPerPage
        ? "none"
        : "block";
  }

  function updateCarousel() {
    const itemsPerPage = calculateItemsPerPage();
    const translateX = -currentIndex * (100 / itemsPerPage);
    carousel.style.transform = `translateX(${translateX}%)`;
    const screenWidth = window.innerWidth;
  }

  function calculateItemsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 5;
    } else if (screenWidth >= 992) {
      return 5;
    } else if (screenWidth >= 768) {
      return 5;
    } else if (screenWidth >= 576) { 
      return 3;
    } else {
      return 1;
    }
  }

  updateArrowsVisibility();

  prevButton.addEventListener("click", function () {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
    updateArrowsVisibility();
  });

  nextButton.addEventListener("click", function () {
    const itemsPerPage = calculateItemsPerPage();
    const maxIndex = carousel.children.length - itemsPerPage;
    
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
      updateArrowsVisibility();
    }
  });

  window.addEventListener("resize", function () {
    updateCarousel();
    updateArrowsVisibility();
  });
});