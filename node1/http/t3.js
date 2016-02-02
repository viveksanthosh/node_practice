var http = require('http');
var file = require('fs');
http.createServer(function(req,res){

  if(req.url!=='/')
  {
    var filename= req.url.substr(1,req.url.length-1);
      console.log(filename);
    file.exists(filename,function(exists){
      console.log(exists);
      if(exists){
        var test=req.url.substr(req.url.length-5,req.url.length-1);
        console.log(test);
      }

    })
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<input>');
  }
}).listen(1234);
