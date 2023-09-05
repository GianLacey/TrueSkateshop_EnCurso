window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollButtons = document.querySelectorAll(".scroll-to-top"); // Selección por clase
  scrollButtons.forEach(function(scrollButton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
}

var scrollButton = document.querySelector(".scroll-top-button"); // Selección por clase
scrollButton.onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  
  
  