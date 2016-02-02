var r= require('request');


// streams emmit events

var result=r('https://www.google.com');

result.on('data', function(){
console.log('got a piece');
})

result.on('end', function(){
console.log('done');
})
