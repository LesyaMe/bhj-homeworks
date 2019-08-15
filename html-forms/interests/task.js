let int = document.querySelectorAll(".interest__check");
let arrInt = Array.from(int);

let i = 0;

for (i; i< arrInt.length; i++) {
	let elem = arrInt[i];

	elem.addEventListener("change", function(e) {

        let children = elem.closest("label").nextElementSibling
        let children_list = children.querySelectorAll(".interest__check");
        let arrChildren_list = Array.from(children_list);
        
        for (let n=0; n < arrChildren_list.length; n++) {
            if (elem.checked) {
                arrChildren_list[n].checked = true;	
            } else {
                arrChildren_list[n].checked = false;
            }
        }
    })
}	
