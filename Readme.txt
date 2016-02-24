/////////////////////////////////
// question
// 1. Input: Age field empty with 'blank line' or 'no line'? [blank line]
//   ex 1: blank line for no Age
//     Name1
//     
//     Name2
//     20
//   ex 2: no line for no Age
//     Name1
//     Name2
//     20
//>> no line (not have blank line)

// 4. Output: JSON record is object or array? [array]
//   ex 1: array item
//     [..., [An, 10],...]
//   ex 2: object item
//     [..., {name:"An", age:10},...]
//>> CSV, no JSON

// 2. Input: Have encoding data (ascii/utf8/etc)? [ascii]
//>> anything

// 3. Input/Output: Break line  / file format (windows '\r\n' /unix '\n')? -> require('os').EOL
//>> both

// 5. Output: Have output pretty (noneed/yes)? [noneed]
//>> same #4

// 6. Performance: Methodology loop, recured, big data?
// >> noneed

// 7. Validation: Have to validate?
//>> yes

// 8. Name using as a number (ex: "20")
//>> no

// Not yet confirm with anh Tri:
// 9. Have blank line at begin, end of file?
//   ex:
//     <blank lines>
//     Name01
//     <blank lines>
//>> no


/////////////////////////////////
// pending points
// 1. character encoding (unicode) - Q#2
// 2. Output error (have problem about callback in Node.js) - 50% Q#7
// 3. CSV escape - Q#4,5
// 4. Trim file content - Q#9
// 5. Create "02_expected" to verify by file compare


/////////////////////////////////
// how to run this program (windows)
// 1. install node js from 'https://nodejs.org/dist/v5.6.0/node-v5.6.0-x64.msi'
// 2. unzip this package to working folder (example: ... > users > user1)
// 3. open ncp console (example: start > program > node js > Node.js command promt)
// in ncp console:
// 4. set current directory to #2
// 5. create test data by command line '...>node line2csv/data/create'
// 6. run program by command '...>node line2csv/run'


/////////////////////////////////
// references
// https://nodejs.org
// https://nodejs.org/api
// http://www.tutorialspoint.com/nodejs
// https://www.npmjs.com
// stackoverflow search results



/////////////////////////////////
// research
// 1. how to run node js on window
// 2. node js reade text file
// 3. node js write text file
// 4. node js include local file
// 5. node js get current path
// 6. node js newline character follow os
// 7. node js convert array to json



/////////////////////////////////
// cloud
// http://c9.io/tuanthanhngo/line2csv
// http://code.runnable.com/u/tuanthanhngo/line2csv
// https://github.com/tuanthanhngo/line2csv



/////////////////////////////////
// read text file by readFileSync
function readFile2String(filepath) {
   var fs = require('fs');

   var array = fs.readFileSync('testdata1.txt').toString().split(BREAKLINE);
 //"\n" or "\r\n"
   for (i in array) {

      console.log(array[i]);

   }
}


/////////////////////////////////
// read text file by fs.readFile
function readFile2String(filepath) {
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      strdata = data.toString();
      console.log("Asynchronous read: " + strdata);
      return strdata;
   });
}

/////////////////////////////////
// write text file by fs.writeFile
function writeFile4String(filepath, str) {
   var fs = require("fs");

   console.log("Going to write into existing file");
   fs.writeFile(filepath, str,  function(err) {
      if (err) {
         return console.error(err);
      }
      console.log("Data written successfully!");
   });
}