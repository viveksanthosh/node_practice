var http = require('http');

http.createServer(function(req,res){
  if(req.url=='/')
  {
    res.writeHead(500, {'Content-Type' : 'text/html'});
    res.end('<input>');
  }
}).listen(1234);
