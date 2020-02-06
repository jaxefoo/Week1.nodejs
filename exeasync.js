var fs = require('fs');
console.log("Begin Reading File");
fs.readFile('input2.txt', function(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("End reading file");
	console.log("Begin appending file")
fs.appendFile('input2.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
  console.log("End appending file");
  console.log("Begin re-reading file");
  fs.readFile('input2.txt', function(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("End re-reading file")
});
});
});