var fs = require ('fs');
console.log("Begin reading File");
var data = fs.readFileSync ("input2.txt");
console.log(data.toString());
console.log("End reading file")
console.log("Begin Appending File")
fs.appendFileSync('input2.txt', 'data to append');
console.log('The "data to append" was appended to file!');
console.log("Begin re-reading File");
fs.readFileSync ("input2.txt");
console.log(data.toString());
console.log("End re-reading File")