var exp = require('./t1');
console.log(typeof exp);
var cnt = exp.count;
console.log(cnt);
var func = exp.func;
func(2,3);
exp = require('./t1');
console.log(exp.count);
// count = exp.count;
//console.log(count);
