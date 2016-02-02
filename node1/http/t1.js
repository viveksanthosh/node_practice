var http = require('http');

var ob={
  port: 80,
  host: 'www.tesco.com',
  path: '/',
  method: 'GET'
};

var req=http.request(ob,function(r){
  // r.pipe(process.stdout)
  console.log(r.toString());
});

req.end();
