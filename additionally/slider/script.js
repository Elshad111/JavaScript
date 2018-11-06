$(function(){
	var modal1 = new myModal({
		overlay : '.overlay',
		modal : '.modal'
	});
	
	$('.modal-first').on('click', function(){
		modal1.open($('.hello').html());
	});
});

function myModal(obj){
	this.overlay = $(obj.overlay);
	this.modal = $(obj.modal);
	var myModal = this;
	var stopModal = false;
	this.open = function(text){
		if(stopModal){
			return ;
		}
		stopModal = true;
		myModal.modal.html(text);
		myModal.overlay.addClass('active');
		myModal.modal.css({
			display : 'block',
		}).animate({
			top : '50%',
			opacity : 1
		}, 500, function(){
			stopModal = false;
		});
	}
	
	this.close = function(){
		if(stopModal){
			return ;
		}
		stopModal = true;
		myModal.modal.animate({
			top : '30%',
			opacity: 0
		}, 500, function(){
			myModal.modal.removeAttr('style');
			myModal.overlay.removeClass('active');
			stopModal = false;
		});
		
	}
	
	myModal.overlay.on('click', function(){
		myModal.close();
	});
}