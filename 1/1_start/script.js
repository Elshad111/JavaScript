window.onload = function(e){
	
	var buttons = document.querySelectorAll(".actions input");
	
	
	for(var i = 0; i < buttons.length; i++){
		buttons[i].onclick = btnClick;
	}
	
}

function btnClick(e){
	/* console.log(this);
	
	for(var k in this){
		document.body.innerHTML += "<b>" + k + "<b>" + this[k] + "<br>";
	} */
	
	var name = this.getAttribute('name');
	
	if(name == 'save'){
		console.log(1);
	}else if(name == "delete"){
		console.log(2);
	}
}

