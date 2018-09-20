window.onload = function(){
	
	var items = document.querySelectorAll('.items .item');
	var result = document.querySelector('.counter .result');
	var slip = document.querySelector('.counter .slip');
	var counterTime = document.querySelector('.counter .counterTime');
	var counter = 0;
	var counterSlip = 0;
	
	
	var timer = new Timer(10, counterTime);
	
	setInterval(function(){
		if(timer.time != 0){
			timer.tick();
			
		}else{
			alert("ВЫ НАБРАЛИ: " + result.innerHTML + "\nНАЧАТЬ ЗАНОВО");
			location.reload();			
		}
	}, 1000);
	
	function orange(){
		this.classList.toggle('orange');
	}
	
	for(var i = 0; i < items.length; i++){
		items[i].onclick = function (){
			if(this.classList.contains('orange')){
				counter += 1;
			}else{
				counterSlip += 1;
				counter -= 1;
			}
			
			result.innerHTML = counter;
			slip.innerHTML = counterSlip;
		}
	}
	
	
	setInterval(function(){
		var rand = mtRand(0, items.length - 1);
		orange.call(items[rand]);
	},300);
	
}

function mtRand(min, max){
	return Math.floor(Math.random() * (max - min + 1));
}

function Timer(time, elem){
	
	this.time = time;
	this.elem = elem;
	
	this.tick = function(){
		this.time--;
		this.elem.innerHTML = this.time
	}
}
















