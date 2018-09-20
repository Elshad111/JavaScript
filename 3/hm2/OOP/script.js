window.onload = function(){
	
	new Popup({
		elem : '.popup1',
		text : "Hello world"
	});
	
	new Popup({
		elem : '.popup2',
		text : "Hello world!!!!!!!!!!!!!!!"
	});
	
}

function Popup(ob){
	
	var dlPopup = document.querySelector('.dlPopup');
	var dlPopupOverlay = document.querySelector('.dlPopupOverlay');
	this.elem = document.querySelector(ob.elem);
	this.text = ob.text;
	var popup = this;
	
	var div = document.createElement('div');
	div.innerHTML = this.text;
	
	this.open = function(){	

		dlPopup.appendChild(div);	
		dlPopup.classList.add('dlPopup-open');
		dlPopup.classList.add('fade');
		dlPopupOverlay.classList.add('dlPopupOverlay-open');
		
	}
	
	this.close = function(){	

		div.dlPopup.removeChild(div);
		dlPopup.classList.remove('dlPopup-open');		
		dlPopup.classList.remove('fade');
		dlPopupOverlay.classList.remove('dlPopupOverlay-open');
		
	}
	
	popup.elem.onclick = popup.open;
	dlPopupOverlay.onclick = popup.close;
	
	
}