window.onload = function(){
	
	var slider = new Slider({
		images: '.gallery1 .photos img',
		btnPrev: '.gallery1 .buttons .prev',
		btnNext: '.gallery1 .buttons .next',
		auto : true,
		rate: 100
	});
	
	var slider2 = new Slider({
		images: '.gallery2 .photos img',
		btnPrev: '.gallery2 .buttons .prev',
		btnNext: '.gallery2 .buttons .next',
		auto : true
	});
	
	
	
	
	function Slider(obj){
		this.images = document.querySelectorAll(obj.images);
		this.btnPrev = document.querySelector(obj.btnPrev);
		this.btnNext = document.querySelector(obj.btnNext);
		this.auto = obj.auto;
		this.rate = obj.rate || 1000;
		var i = 0;
		var slider = this;
		
		this.next = function(){
			slider.images[i].classList.remove('showed');
			i++;
			
			if(i >= slider.images.length){
				i = 0;
			}
			
			slider.images[i].classList.add('showed');
		}
		
		this.prev = function(){
			slider.images[i].classList.remove('showed');
			i--;
			
			if(i < 0){
				i = slider.images.length - 1;
			}
			
			slider.images[i].classList.add('showed');
		}	
		
		slider.btnPrev.onclick = slider.prev;
		slider.btnNext.onclick = slider.next;
		
		if(slider.auto){
			setInterval(slider.prev, slider.rate);
		}
	}

}