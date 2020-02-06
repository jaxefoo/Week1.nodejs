var fs = require('fs');

console.log("Begin Reading File");
fs.reafFile('INPUT.txt',function(err,data){
	if(err) return err;
	console.log("data.toString");
})
console.log("Program Ended!");