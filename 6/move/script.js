$(function(){
	var move = false;
	$(document).on('click', function(event){
		if(move){
			return;
		}
		move = true;
		$('.some').animate({
			top : event.clientY,
			left: event.clientX
		}, 500, function(){
			move = false;
		});
	});
});

/*
keyCode
38, 39 40, 41
*/