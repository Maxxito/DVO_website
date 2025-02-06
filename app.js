var menu = document.getElementById("menu");

function showMenu(){
    menu.style.right="0px";
}

function hideMenu(){    
    menu.style.right="-360px";
}

const log = e => {
    console.clear();
    console.log(`${e.target.parentNode.previousElementSibling.dataset.about}`);
  };


document.getElementById("grid").addEventListener("click", function(e) {
	if(e.target) {
		if(e.target.nodeName=="DIV" && e.target.children.length==2){
            console.log("YES")
            e.target.children[1].focus();
        }
        else if(e.target.nodeName=="A" && e.target.parentNode.children.length==2){
            console.log(e.target.parentNode);
            e.target.parentNode.children[1].focus();    
        }
	}
    else console.log("No")
});