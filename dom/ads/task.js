let rotattor = document.querySelectorAll(".rotator__case");
let arrRotattor = Array.from(rotattor);

 
/*Уместно ли писать так индекс?: arrRotattor[current++].classList.add("rotator__case_active");
Почему в переключении отражается просто "Я"? т.е. у всех элементов отсутствует активный класс?
Rак это иправить?*/

let current = 1;


function showNextCase(n) {
   
	if (n < 1) {
		current = arrRotattor.length;
	} else if (n > arrRotattor.length) {
		current = 1;
	}

	for (let i = 0; i < arrRotattor.length; i++ ) {
		arrRotattor[i].classList.remove("rotator__case_active");
	}
    arrRotattor[current++].classList.add("rotator__case_active");
}

let id = setInterval("showNextCase(current)", 1000);
