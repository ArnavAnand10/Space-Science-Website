const branchItems = document.querySelector(".branch-items");
    const popup = document.querySelector(".popup-box")
    const popupCloseBtn = popup.querySelector(".popup-close-btn");
    const popupCloseIcon = popup.querySelector(".popup-close-icon");
  
    branchItems.addEventListener("click",function(event){
      if(event.target.tagName.toLowerCase() == "button"){
         const item =event.target.parentElement;
         const h3 = item.querySelector("h3").innerHTML;
         const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
         popup.querySelector("h3").innerHTML = h3;
         popup.querySelector(".popup-body").innerHTML = readMoreCont;
         popupBox();
      }
  
    })
  
    popupCloseBtn.addEventListener("click", popupBox);
    popupCloseIcon.addEventListener("click", popupBox);
  
    popup.addEventListener("click", function(event){
       if(event.target == popup){
          popupBox();
       }
    })
  
    function popupBox(){
      popup.classList.toggle("open");
    }

// Back To Top Button

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
