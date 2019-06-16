let modalWindow = document.getElementById("modal_main");
modalWindow.classList.add("modal_active");	


let success =  document.getElementById("modal_success");
let successButton = document.getElementsByClassName("show-success")[0];

function changeWindow() {
  modalWindow.classList.remove("modal_active");
  success.classList.add("modal_active");
}



successButton.onclick = changeWindow;

let activeWindow = document.getElementsByClassName("modal_active")[0];

function closeWindow() {
  activeWindow.classList.remove("modal_active");
}


let closeButtons = document.getElementsByClassName("modal__close")[0];
/*let closeMe = Array.from(closeButtons);
closeMe.onclick = closeWindow;

for (let i = 0; i < closeMe.lenght; i++ ) {
  let closeButton = closeMe[i];
  closeButton.onclick = closeWindow;
}*/

closeButtons.onclick = closeWindow;

/*let elementsForClose = document.getElementsByClassName("modal_active");
let arrElementsForClose = Array.from(elementsForClose);

let closeButtons = document.getElementsByClassName("modal__close");
let closeMe = Array.from(closeButtons);

function closeItNow() {
  success.classList.remove("modal_active");	
}


for (let i = 0; i < closeMe.lenght; i++ ) {
  let closeButton = closeMe(i);

  closeButton.onclick = closeItNow;
}
*/

