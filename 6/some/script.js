$(function(){
	var move = false;
	$('#box').on('mouseenter', function(){
		if(move){
			return;
		}
		move = true;
		$('.some').animate({borderSpacing: 90},{
			step : function(now,fx){
				$(this).css({
					transform: 'rotate('+now+'deg)'
				});
			},
			duration : 500
		}, 'linear');
		
	});
	
	$('#box').on('mouseleave', function(){
		if(move){
			return;
		}
		move = true;
		$('.some').animate({borderSpacing: 0},{
			step : function(now,fx){
			$(this).css({
				transform: 'rotate('+now+'deg)'
			});
		},
			duration : 500
		}, 'linear');
	});
});