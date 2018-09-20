window.onload = function (){
	
	var items = document.querySelectorAll('.items .item');
	
	var ourJquery = $('.item');
	
	
	
	ourJquery.addClass('a');
	
	ourJquery.removeClass('a');
	
	ourJquery.html('jhgfgdhjkjlhgf');
	
	$('.items .item').on('click', function(){
		$(this).html('212');
	});
	
	$('.items .item').html();
	
}