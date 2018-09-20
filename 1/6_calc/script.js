window.onload = function(e){
	
	var inp1 = document.querySelector('input[name=num1]');
	var inp2 = document.querySelector('input[name=num2]');
	var span = document.querySelector('.res');
	
	
	var buttons = document.querySelectorAll('input[type=button]');
	
	for(var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(){
			var op = this.getAttribute('data-op');
			calcForm(op);
			console.log(op);
		}
	}
	
	function calcForm(op){
		var a = parseInt(inp1.value);
		var b = parseInt(inp2.value);
		var result = 0;
		
		if(op === "+"){
			result = a + b;
			
		}else if (op === "-"){
			result = a - b;
			
		}else if (op === "*"){
			result = a * b;
			
		}else if (op === "/"){
			result = a / b ;
			
		}
		
		span.innerHTML = result;		
	}
	
		
}
