
let deathHole = document.getElementById("dead"); 
let looser = document.getElementById("lost"); 
var elements = document.getElementsByClassName("hole"); // собираем все элементы с классом hole
let holeArr = Array.from(elements); //преобразуем полученные данные в массив


function manipulation() {
  if (this.className.includes( "hole_has-mole" )) {
  	deathHole.textContent++;
  } else {
  	looser.textContent++;
  }

  if (deathHole.textContent == 10) {
  	alert("Ну ты огонь!");
  	deathHole.textContent = 0;
  	looser.textContent = 0;
  }

  if (looser.textContent == 5) {
  	alert("упсс... кажется, ты проиграл");
  	deathHole.textContent = 0;
  	looser.textContent = 0;
  }
}

for (var i = 0; i < holeArr.length; i++) {
  let Hole = holeArr[i];
  Hole.onclick = manipulation;
}
	


