
var r= require('request');
var file= require('fs');

// streams emmit events
if(file.existsSync('test'))
{

 file.unlinkSync(process.cwd()+'\\test\\t.js');
 file.rmdirSync('test');

}



file.mkdir('test',function(e){

  file.exists('test',function(e){
    process.chdir('test');
   file.writeFile('t.js', 'var a=0', function(e){
     file.readFile('t.js',function(e,r){
       console.log(r.toString());
     })
   })
  })
})
