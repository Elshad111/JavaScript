$(function(){
	var widthImg = $('.photo').outerWidth();
	var cnt = 0;
	var img = -(($('.photo img').length - 1) * widthImg);
	var move = false;
	console.log(img);
	$('.next').on('click', function(){
		if(move){
			return;
		}
		move = true;
		cnt = cnt - widthImg;
		if(cnt < img){
			cnt = 0;
		}
		$('.photo').animate({			
			borderTransparent : cnt
		}, {
			step : function(now, fx){
				$(this).css({
					transform: 'translateZ(0px) translateX('+now+'px)'
				});
			}, duration : 1000,
			complete : function(){
				move = false;
			}
		}, 'linear');
	});
	$('.prev').on('click', function(){
		if(move){
			return ;
		}
		move = true;
		cnt = cnt + widthImg;
		if(cnt > 0){
			cnt = img;
		}
		$('.photo').animate({
			borderTransparent : cnt
		},{
			step : function(now, fx){
				$(this).css({
					transform : 'translateZ(0px) translateX('+now+'px)'
				});
			}, 
			duration : 1000,
			complete : function(){
				move = false;
			}
		}, 'linear');
	});
});