function Popup(options){
	
	this.modal = document.querySelector(options.modal);
	this.overlay = document.querySelector(options.overlay);
	
	var popup = this;
	
	this.open = function(content){
		popup.modal.innerHTML = content;
		popup.modal.classList.add('open');
		popup.overlay.classList.add('open');
	}
	
	this.close = function(){
		popup.modal.classList.remove('open');
		popup.overlay.classList.remove('open');
	}
	
	this.overlay.onclick = popup.close;
	
}

window.onload = function(){
	
	var p = new Popup({
	modal : '.modal',
	overlay : '.overlay'
});
	
	document.querySelector('.callme').onclick = function(){
		var form = document.querySelector('.for-callme');
		p.open(form.innerHTML);
	}
	
}