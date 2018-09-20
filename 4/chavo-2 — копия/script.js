$(function(){

	$(".question").on('click', function(){
		var id = $(this).attr('data-id');
		var open = $('.answer [data-open=' + id + ']');
		
		if($('.answer [data-open=' + id + ']')){
			open.slideUp();
		}
		
		open.slideToggle();
		
		
	});
	
});