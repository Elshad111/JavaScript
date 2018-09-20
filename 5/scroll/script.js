$(function(){	
	$(window).on('scroll', function(){		
		if($(this).scrollTop() > 100){
			$('.scroll-to-top').addClass('vis').on('click', function(){
				$('html, body').stop().animate({
					scrollTop: 0
				}, 700);				
			});			
		}else{
			$('.scroll-to-top').removeClass('vis');			
		}		
	});	
});