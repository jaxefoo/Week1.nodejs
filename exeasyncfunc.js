var fs = require('fs');

function finishprogram(err,data){
	console.log(data.toString());
	console.log("Finish Re-reading file");
}

function rereading(err){
	if (err) return err;
	console.log("Finish appending file");
	console.log("Begin Re-reading file");
	fs.readFile("input2.txt",finishprogram)
}
function appendFile(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish reading file");
	console.log("Begin appending file");
	fs.appendFile("input2.txt"," I am appending something",rereading);	
}

console.log("Begin reading file")
fs.readFile("input2.txt",appendFile)