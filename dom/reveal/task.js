    
let advantage = document.querySelectorAll(".reveal");
let arrAdv = Array.from(advantage);
let viewportHeight = window.innerHeight;


for (let i = 0; i < arrAdv.length; i++) {
    
    let elementBottom = arrAdv[i].getBoundingClientRect().bottom;
    function show () {
        return arrAdv[i].classList.add("reveal_active");    
    } 

    if (elementBottom < viewportHeight) {
        document.addEventListener("scroll", show);    
    }
      
}


/*работает только при перезагрузке страницы и открывает блок сразу*/


/* ===Вариат, показывающий только 1й блок ===  
let advantage = document.querySelector(".reveal")
console.log(advantage.getBoundingClientRect().top);


function showElem () {
    const viewportHeight = window.innerHeight;
    const elementTop = advantage.getBoundingClientRect().top;
    const elementBottom = advantage.getBoundingClientRect().bottom;
    if (elementTop < viewportHeight) {
        return advantage.classList.add("reveal_active");    
    }
}

document.addEventListener("scroll", showElem);
======================================================*/