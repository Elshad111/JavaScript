window.onload = function(){
	
	var items = document.querySelectorAll('.items .item');
	var valuePrice = document.querySelector('.value');
	
	for(var i = 0; i < items.length; i++){
		items[i].onclick  = function (){
			this.classList.toggle('red');
			calcPrice();
		}
	}
	
	function calcPrice(){
		
		var price = 0;
		for(var i = 0; i < items.length; i++){
			if(items[i].classList.contains('red')){
					price += parseInt(items[i].getAttribute('data-price'));
					
			}
		}
		
		valuePrice.innerHTML = price;
	}
	
	
}