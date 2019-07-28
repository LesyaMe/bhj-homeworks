let modalWindow = document.getElementById("modal_main");
modalWindow.classList.add("modal_active");	


let success =  document.getElementById("modal_success");
let successButton = document.querySelector(".show-success");
let closeButtons = document.querySelectorAll(".modal__close_times");

//переключаю с "Сделать хорошо" на "Хорошо сделано!"
function changeWindow() {
  modalWindow.classList.remove("modal_active");
  success.classList.add("modal_active");
}
successButton.onclick = changeWindow;

//ищу активное на данный момент окно

// функция убирает класс "modal_active",закрывая окно
function closeWindow() {
  let activeWindow = document.querySelector(".modal_active");
  activeWindow.classList.remove("modal_active");
}

//преобразую HTML-collection 'closeButtons' в массив 
let closeMe = Array.from(closeButtons);

//к каждому элементу массива по клику применяю функцию, убирающую класс "modal_active"
closeMe.forEach(function(i) {
	i.onclick = closeWindow;
});
