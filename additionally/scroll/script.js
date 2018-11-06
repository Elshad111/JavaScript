$(function(){
 	var move = false;
	var $btn = $('.scroll-to-top');
	function scollBtn(){
		var top = $(this).scrollTop();	
		if(top > 100){
			$btn.fadeIn(500);
		}else{
			$btn.fadeOut(500);
		}
	}
	scollBtn();
	$(document).on('scroll', scollBtn);	
	$btn.on('click', function(){
		if(move){
			return ;
		}
		move = true;
		$('html, body').animate({
			scrollTop : 0
		}, 700, function(){
			move = false;
		});
	});
	
/* 	var o = {
		name : "Alex",
		say : function(){
				function some(){
				console.log(this.name.toString());
			}
			some();
		}
	};
	o.say(); */
});