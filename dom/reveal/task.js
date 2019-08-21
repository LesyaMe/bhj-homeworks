let advant = document.querySelectorAll(".reveal");
let arrAdvant = Array.from(advant);


function showBlock() {
    const viewportHeight = window.innerHeight;

    for (let i=0; i < arrAdvant.length; i++) {
      let elementBottom = arrAdvant[i].getBoundingClientRect().bottom;

      if (elementBottom < viewportHeight) {
        arrAdvant[i].classList.add("reveal_active");    
      }
    }
}
document.addEventListener("scroll", showBlock);