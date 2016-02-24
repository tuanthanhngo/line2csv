// import local
var filesys = require('./filesys');

// readFile2StringSync
console.log("filesys.js>>%s", filesys.readFile2StringSync(__dirname + '/tmp/readfile.txt'));

// readFile2StringSync
filesys.writeFile4String(__dirname + '/tmp/writefile.txt', 'Hello... world!' + new Date());
//console.log("filesys.js>>%s", filesys.readFile2StringSync(__dirname + '/tmp/writefile.txt'));

// getFileName
console.log("filesys.js>>%s", filesys.getFileName('abc/file.txt'));

// walk
var lstfiles = filesys.walk(__dirname + '/data');
lstfiles.forEach(function(entry) {
  console.log("filesys.js>>%s", entry);
});





// others test for fs

// import global
// tested is OK 2016/02/22 12:30
var fs = require("fs");

//
fs.readdir(__dirname + '/tmp', function(err, files) {
  if (err) return console.log(err);
  files.forEach(function(entry) {
    console.log("filesys.js>>%s", entry);
  });
});


// other test for JSON
var arrVal = new Array();
var arrItem;

arrItem = new Object();
arrItem.name = 'a';
arrItem.age = 1;
arrVal.push(arrItem);

arrItem = new Object();
arrItem.name = 'b';
arrVal.push(arrItem);

arrItem = new Object();
arrItem.name = 'c';
arrItem.age = 3;
arrVal.push(arrItem);

var myJsonString = JSON.stringify(arrVal);
console.log("filesys.js>>%s", myJsonString);

