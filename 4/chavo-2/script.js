$(function(){

	$(".question").on('click', function(){
		var answer = $(this).next();
		
		$('.block .answer:visible').not(answer).slideUp();
		$(this).next().slideToggle();
		
	});
	
});