$(function(){
	$('.myModal').on('click', function(){
		$('.overlay').addClass('active');
		$('.modal').css({
			display : 'block'
		}).animate({
			top : '50%',
			opacity : 1
		}, 400);
	});
	$('.overlay').on('click', function(){
		$('.modal').animate({
			top: '30%',
			opacity: 0
		}, 400, function(){
			$('.overlay').removeClass('active');
			$(this).removeAttr('style');
		});		
	});
});