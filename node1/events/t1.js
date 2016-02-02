
var em=require('events').EventEmitter;
var emitter= new em();

var eventFunction = function(){
setTimeout(function(){
  emitter.emit('hello',[0,1,2]);
},3000);
return emitter ;
}

var result = eventFunction();
result.on('hello',function(r){
  console.log(r);
})
