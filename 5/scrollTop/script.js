$(function(){
	$('.menu_container a').on('click', function(e){
		e.preventDefault();
		
		$('.menu_container a').removeClass('active').filter(this).addClass('active');
		
		var selector = $(this).attr('href');
		var h = $(selector);
		
		$('html, body').animate({
			scrollTop : h.offset().top - 60
		}, 700);
		
	});
	
});