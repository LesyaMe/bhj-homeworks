let book = document.getElementById("book");
let link = document.querySelectorAll(".font-size");
let arrLink = Array.from(link);


function changeSize (event) {
    for (let i = 0; i < arrLink.length; i++) {
        arrLink[i].classList.remove("font-size_active");	
    }

	event.target.classList.add("font-size_active");	
	
    
    console.log(this.dataset.size);

    book.classList.remove("book_fs-small");
	book.classList.remove("book_fs-big");

	if (this.dataset.size == "big") {
	    book.classList.add("book_fs-big");	
	} else if (this.dataset.size == "small") {
        book.classList.add("book_fs-small");
	}
	
	return false;
}

for (let i = 0; i < arrLink.length; i++) {
    
	arrLink[i].onclick = changeSize;
		
}

