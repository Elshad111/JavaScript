window.onload = function(e){
	
	var inputs = document.querySelectorAll('.check');
	
	var formValidation = document.querySelector('form');
	
	formValidation.onsubmit = function(e){
		var error = false;
		
		for(var i = 0; i < inputs.length; i++){
			if(inputs[i].value === ""){
				inputs[i].classList.add('red');
				error = true;
				
			}else if(inputs[i].value.length < 5 || inputs[i].value.length > 15){
				inputs[i].classList.add('red');
				error = true;
				
			}else{
				
				inputs[i].classList.remove('red');
			}
			
		}	
			
		if(error){
			return false;
		}
			
	}	
}