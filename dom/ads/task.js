let rotattor = document.querySelectorAll(".rotator__case");
let arrRotattor = Array.from(rotattor);

 
/*Почему в переключении отражается просто "Я"? т.е. у всех элементов отсутствует активный класс?
Rак это иправить?*/

let current = 1;


function showNextCase(n) {
   
	if (n < 1) {
		current = arrRotattor.length;
	} else if (n > arrRotattor.length) {
		n = 0;
		current = 1;
	}

	for (let i = 0; i < arrRotattor.length; i++ ) {
		arrRotattor[i].classList.remove("rotator__case_active");
	}
	current = current+=1;
    arrRotattor[current].classList.add("rotator__case_active");
}

//  в этом виде все работет, только одним из элементов цикла появляется "Я"
let id = setInterval("showNextCase(current)", 1000);

/*========так ничего не работает==============
let id = setInterval(showNextCase(current), 700);
============================================*/


/*============так проходит только 1 цикл, завершается на "Я"
let id = setInterval('showNextCase()', 700);
===========================================*/



