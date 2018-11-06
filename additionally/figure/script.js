$(function(){
	$('figure').on('mouseenter', function(){
		$(this).css({
			opacity: '.5'
		});
		$('figcaption').css({
			display: 'block',
			position: 'absolute',
			top : '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
			'font-size': '24px',
			color: '#fff',
			'text-align': 'center'
		});
	});
	
	$('figure').on('mouseleave', function(){
		$(this).removeAttr('style');
		$('figcaption').removeAttr('style');
	});
});