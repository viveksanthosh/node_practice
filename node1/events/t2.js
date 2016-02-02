var em = require('events').EventEmitter;


var eventFunction = function() {
  var emitter = new em();
  var c = 0;

    setInterval(function() {
        emitter.emit('run', c++);
    }, 1000);

    process.nextTick(function(){emitter.emit('start', 'starting');});

    return emitter;
}

var result = eventFunction();

result.on('start', function(r) {
    console.log(r);
})

result.on('run', function(r) {
    console.log(r);
})
