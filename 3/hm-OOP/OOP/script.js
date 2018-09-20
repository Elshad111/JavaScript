window.onload = function(){
	
	new Popup({
		elem : '.popup1',
		pText : "Ljrevgy gfdg fdg fg fdgfjgdfg fgfd gj fd"
	});
	
	new Popup({
		elem : '.popup2',
		pText : "Ljrevgy gfdg fdg fg fdgfjgdfg fgfd gj fd"
	});
	
}

function Popup(ob){
	
	this.elem = document.querySelector(ob.elem);
	this.pText = ob.pText;
	var popup = this;
	
	var dlPopup = document.querySelector('.dlPopup');
	var dlPopupOverlay = document.querySelector('.dlPopupOverlay');
	
	var div = document.createElement('div');
	div.innerHTML = this.pText;
	
	this.open = function(){
		dlPopup.appendChild(div);
		dlPopup.classList.add('dlPopupOverlay-open');
		dlPopupOverlay.classList.add('dlPopupOverlay-open');
	}
	
	this.close = function(){
		dlPopup.removeChild(div);
		dlPopup.classList.remove('dlPopupOverlay-open');
		dlPopupOverlay.classList.remove('dlPopupOverlay-open');
	}
	
	popup.elem.onclick = popup.open;
	dlPopupOverlay.onclick = popup.close;
	
}