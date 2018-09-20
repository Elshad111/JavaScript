window.onload = function(e){
	
	var a = ['a', 'b', 'c'];
	
	for(var i = 0; i < a.length; i++){
		console.log(a[i]);
		
	}
	
	var b = {
		russia : 'Moscov',
		usa : 'Vashington',
		knr : 'Pekin'
	}
	
	console.log(b.usa);
	console.log(b['usa']);
	
	for(var key in b){
		console.log(b[key]);
	}
}