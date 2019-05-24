const image = document.getElementById('cookie');

function changeSizes() {
  let output = document.getElementById("clicker__counter"); 
  output.textContent++;

 if (output.textContent % 2 === 0) {
   	image.width = 200;
   } else {
   	  image.width = 300;
   }

   console.log(output.textContent);
};

image.onclick = changeSizes;


/*const addClick = function() { 
	let output = document.getElementById("clicker__counter"); 
	output.textContent += 1; 
}*/


