const addText = function() { 
	let output = document.getElementById("timer"); 
	output.textContent -= 1; 

	if (output.textContent == 0) {
	 clearInterval(stopInt);
	 alert('Вы победили в конкурсе!');
  }
}

let stopInt = setInterval(addText, 1000);



