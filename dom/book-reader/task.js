let book = document.getElementById("book");
let link = document.querySelectorAll(".font-size");
let arrLink = Array.from(link);


function changeSize (event) {
    for (let i = 0; i < arrLink.length; i++) {
        arrLink[i].classList.remove("font-size_active");	
    }

	if (event.target.classList.contains("font-size")) {
	    event.target.classList.add("font-size_active");	
	}
    
    console.log(this.dataset.size);

	if (this.dataset.size == "big") {
	    book.classList.add("book_fs-big");	
	} else if (this.dataset.size == "small") {
        book.classList.add("book_fs-small");
	} else {
		book.classList.remove("book_fs-small");
		book.classList.remove("book_fs-big");
	}
	
	return false;
}

for (let i = 0; i < arrLink.length; i++) {
    
	arrLink[i].onclick = changeSize;
		
}

/* Тест не переключается с маленького сразу на большой,
 только последовательно, через обычный.
 Но с большого на маленький переключается сразу. Почему так?*/