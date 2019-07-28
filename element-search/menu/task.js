//1. Поиск menu__link с родителем menu__item"
//2. Поиск menu_sub (возможно нужен только первый)
// Функция присваиваения menu_active объекту с классом menu_sub
// Вызов фуункции по клику на 1. пункт

let link = document.querySelectorAll(".menu__link");
let arrLink = Array.from(link);
let subMenu = document.querySelectorAll(".menu_sub");
let arrSubMenu = Array.from(subMenu);


function openMenu() {
	arrSubMenu.forEach(function (i) {
		if (i.classList.contains("menu_active")) {
		    i.classList.remove("menu_active");	
		} else {
			i.classList.add("menu_active");
		}
		
	});
    return false;
}


arrLink.forEach(function(i) {
	i.onclick = openMenu; 
});

//----------------------------------

/*if ((arrSubMenu.closest(".menu__item")) == (arrLink.closest(".menu__item"))) {
    arrLink.forEach(function(i) {
	i.onclick = openMenu; 
});
}*/