window.onload = function(e){
	
	var links = document.querySelectorAll('a[target=_blank]');
	
	for(var i = 0; i < links.length; i++){
		links[i].onclick = confirmAway;
	}
	
	function confirmAway(){
		if(!confirm('Ssilka podozritelnay!!!')){
			return false;
		}
	}
	
	var img = document.querySelectorAll('.img');
	
	for(var i = 0; i < img.length; i++){
		img[i].onmousedown = stopMove;
		img[i].oncontextmenu = stopMove;
	}
		
	function stopMove(){
		return false;
	}
}
