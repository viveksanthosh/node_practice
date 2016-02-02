var r= require('request');
var file= require('fs');
var zip= require('zlib');
// streams emmit events

r('https://www.google.com').pipe(zip.createGzip()).pipe(file.createWriteStream('t.html.gz'));
