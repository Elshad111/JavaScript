$(function(){
	var top = 0;
	var left = 0;
	value1 = 0;
	value2 = 0;
	$(document).on('keydown', function(event){
		if(event.keyCode == 39){
			left+= 100;
		}else if(event.keyCode == 40){
			top += 100;
		}else if(event.keyCode == 37){
			left -= 100;
		}else if(event.keyCode == 38){
			top -= 100;
		}
		
		$('.some').css({
			top: top+"px",
			left: left+"px"
		});
	});
});

/*
keyCode
38, 39 40, 41
*/