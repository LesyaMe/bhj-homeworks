let rotattor = document.querySelectorAll(".rotator__case");
let arrRotattor = Array.from(rotattor);

 
/*Почему в переключении отражается просто "Я"? т.е. у всех элементов отсутствует активный класс?
Rак это иправить?*/

let current = 1;


function showNextCase() {
    

    for (let i = 0; i < arrRotattor.length; i++ ) {

		arrRotattor[i].classList.remove("rotator__case_active");
		arrRotattor[current].classList.add("rotator__case_active");
        
	}
    
    current = current+=1;

	if (current >= arrRotattor.length) {
		current = 0;
	}     
	
}

let id = setInterval(showNextCase, 1000);