console.log('test');

var c=1;


var time=setInterval(function(){
	
	console.log('5 x '+c+' = '+(5*c));
	
	c=c+1;
	if(c === 11)
		clearInterval(time);
},1000);

