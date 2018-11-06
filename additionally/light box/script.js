$(function(){
	var figure = $('figure');
	for(var i = 0; i < figure.length; i++){
		figure.eq(i).on('mouseenter', function(){
			$(this).find('figcaption').css({display: 'block'}).animate({
				opacity: 1
			}, 300);
		});
		figure.eq(i).on('mouseleave', function(){
			$(this).find('figcaption').animate({
				opacity: 0
			}, 300).css({display : 'block'});
		});
		figure.eq(i).on('click', function(){
			var img = $(this).find('img').attr('src');
			$('.overlay').addClass('active');
			$('.modal').css({display : 'block'}).html("<img width='90%' src="+img+">").animate({
				opacity : 1
			}, 500);
		});
	}
	$('.overlay').on('click', function(){
		$('.modal').animate({
			opacity : 0
			}, 500, function(){
				$(this).removeAttr('style');
				$('.overlay').removeClass('active');
		});
	});
});
