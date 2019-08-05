
let link = document.querySelectorAll(".menu__link");
let arrLink = Array.from(link);


function openMenu (event) {
	
    let clickElem = event.target;
	console.log(clickElem);
		
    let bro = clickElem.nextElementSibling;
    console.log(bro);

    if (bro.classList.contains("menu_sub")) {
		bro.classList.toggle("menu_active");
	} 
	return false;
}	

arrLink.forEach(function(i) {
	i.onclick = openMenu; 
});






















/*function openMenu(event) {
console.log(event.target.nextSibling.classList.contains("menu_sub"));
//let activeMenu = event.currentTarget.nextSibling.classList.contains("menu_sub");
/*  if (activeMenu == true) { 
  	console.log("прокатило")
	/*arrSubMenu.forEach(function (i) {
		  i.classList.toggle("menu_active");	
	});
    return false;
  };
};


arrLink.forEach(function(i) {
	i.onclick = openMenu; 
}); */
