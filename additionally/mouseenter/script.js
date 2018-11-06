$(function(){
	var $elem = $('strong, em');
	for(var i = 0; i < $elem.length; i++){
		$elem.eq(i).on('mouseenter', function(){
			$(this).animate({
				'color': '#fff',
				'font-size': '25px'				
			}, 500);
		});
	}
	
	for(var i = 0; i < $elem.length; i++){
		$elem.eq(i).on('mouseleave', function(){
			$(this).removeAttr('style');
		});
	}
	
});