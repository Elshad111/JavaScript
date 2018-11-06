$(function(){
	var move = false;
	$('.switch').on('click', function(){
		if($(this).hasClass('switch-active')){
			if(move){
				return ;
			}
			move = true
			$(this).animate({
					'paddingLeft': '0em'
			}, 500, function(){
				$(this).removeClass('switch-active').removeAttr('style');
				$('.flipswitch').html("off");
				$('body').removeAttr('style');
				move = false;
			});
		}else{
			if(move){
				return ;
			}
			move = true;
			$(this).animate({
				'paddingLeft': '4em'
			}, 500, function(){
				$(this).addClass('switch-active').removeAttr('style');
				$('.flipswitch').html("on");
				$('body').css('background', '#b7b7b7');
				move = false;
			});
		}
	});
});