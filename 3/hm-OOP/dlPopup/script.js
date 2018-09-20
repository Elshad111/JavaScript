window.onload = function(){
	
	
	var items = document.querySelectorAll('.items .item');
	var dlPopup = document.querySelector('.dlPopup');
	var dlPopupOverlay = document.querySelector('.dlPopupOverlay');
	
	for(var i = 0; i < items.length; i++){
		items[i].onclick = function(){
			dlPopup.classList.add('dlPopupOverlay-open');
			dlPopupOverlay.classList.add('dlPopupOverlay-open');
		}
	}
	
	dlPopupOverlay.onclick = function(){
		dlPopup.classList.remove('dlPopupOverlay-open');
		dlPopupOverlay.classList.remove('dlPopupOverlay-open');
	}
	
}