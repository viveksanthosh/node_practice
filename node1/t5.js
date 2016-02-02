process.stdin.setEncoding('utf8')

console.log(process.argv);
console.log(process.pid);

process.stdin.on('data',function(data){
  process.stdout.write('Data --->'+data);
  console.log(process.cwd());
});

process.stdin.on('end',function(){
  process.stderr.write('<--- Done --->');
})

process.on('SIGTERM',function(){
  process.stderr.write('<--- Done --->');
})

process.on('SIGQUIT',function(){
  process.stderr.write('<--- Done --->');
})
