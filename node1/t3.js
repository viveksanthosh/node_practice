console.log('test');

var a1 = new Date( ).getTime();


setTimeout(function(){
	var a2 = new Date( ).getTime();
	console.log(a2-a1);
},10);


for(i=0;i<10000;i++)
{console.log(1)}

for(i=0;i<10;i++)
{console.log(2)}