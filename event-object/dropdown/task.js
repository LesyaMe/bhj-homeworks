let baseElem = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");

function openList() {
	list.classList.toggle("dropdown__list_active");
}

baseElem.addEventListener("click", openList);

let lang = document.querySelectorAll(".dropdown__item");
let arrLang = Array.from(lang);


for (let i = 0; i < arrLang.length; i++) {
	let elem = arrLang[i];

	function changeName(event) {
	    baseElem.textContent = event.target.textContent;
	    list.classList.toggle("dropdown__list_active");
	    return false;
    }
	elem.onclick = changeName; 
/*!!!Почему не работает через elem.addEventListener("click", changeName)?*/	
}; 



