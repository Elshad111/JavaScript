$(function(){
	var $option = $('.block .option');
	var counter = 0;
	var cnt = {
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	};
	for(var i = 0; i < $option.length; i++){
		$option.eq(i).on('click', function(){
			counter += 1;
			cnt.1 += parseInt($(this).attr('data-option'));
			
			
			console.log(cnt);
		});
	}		
	
});

/*

counter += 1;
			value = (100 / counter);
			$(this).html(value+"%");
			cnt[i] = parseInt($(this).attr('data-option'));
			console.log(cnt);
*/