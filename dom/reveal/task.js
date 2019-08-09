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



/*
//вариант 1 нерабтающий
function showElem (element) {
	const viewportHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    if (elementTop < viewportHeight) {
        return element.classList.add("reveal_active");	
    }
}
document.onscroll = showElem(advantage);

//window.addEventListener("scroll", showElem(advantage));

*/


/*
// вариант 2 нерабтающий

let B =  function(elem) {
    const viewportHeight = window.innerHeight;
    const elementTop = elem.getBoundingClientRect().top;
    if (elementTop < viewportHeight) {
        return elem.classList.add("reveal_active");	
    }
};

window.onscroll = B(advantage);
*/




/* В двух закоментированных вариантах я пытаюсь передать в функцию аргумент извне,
чтобы предусмотерть возможность нескольких таких элементов на странице, но ничего не выходит.
Подскажите, пожалуйста, в чем моя ошибка?*/ 