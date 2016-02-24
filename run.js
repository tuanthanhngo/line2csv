///////////////////////////////// preparing
// newline, delimiter config
var NEWLINE = require('os').EOL;
var DELIM = ',';

// check import local
var filesys = require('./wrap/filesys');

// util
const util = require('util');

// filesystem
const fs = require('fs');

// data folder
var DATADIR_I = __dirname + '/data/01_input/';
var DATADIR_O = __dirname + '/data/03_output/';


///////////////////////////////// convertLine2CSV
// convert line string to CSV string
// with "number as [Age] to break record" or "not number as [Name] to begin record" 
function convertLine2CSV(str, callback) {
  // init default
  var arrItem;

  // empty case
  if (!(str + '').trim()) return callback('');

  // string to array, split by newline as NEWLINE
  var arrByNewline = str.split(NEWLINE);

  // execute
  var strRet = '';
  var preVl = '';
  arrByNewline.forEach(function(vl, i){
    // validate: no blank line
    console.log("validate: no blank line>>%s", (vl.trim() == ''));
    if (vl.trim() == '') {
      strRet = '';
      return callback(util.format('ERROR: data invalid, have the blank at line %d', i));
      //throw vl;
    }

    // build output
    if (isNaN(vl)) {
      // create init & push name field
      strRet = strRet + ((i == 0) ? '' : NEWLINE) + JSON.stringify(vl); //TODO: CSV escape > JSON.stringify
    } else {
      // validate: name not a number
      prevIsNumber = !isNaN(preVl);
      console.log("validate: name not a number>>%s", prevIsNumber);
      if (prevIsNumber) {
        strRet = '';
        return callback(util.format('ERROR: data invalid, have the [Name] as number at line %d', i));
        //throw vl;
      }

      // add age field & push to list
      strRet = strRet + DELIM + vl;
    }

    preVl = vl;
  });
  console.log(strRet);


  // return
  return callback(strRet);
}


///////////////////////////////// test
// test convertLine2CSV
//convertLine2CSV('a\r\n10\r\nb\r\n', function(res){console.log(res);});
//convertLine2CSV('a\r\n10\r\nb', function(res){console.log(res);});
//return;


///////////////////////////////// main
// loop file to execute
fs.readdir(DATADIR_I, function(err, files){
  files.forEach(function(entry){
    process.nextTick(function(){
      // file item
      console.log(">> To analysis file:%s", entry);

      // read file content and convert to result
      convertLine2CSV(filesys.readFile2StringSync(DATADIR_I + entry), function(res){
        // write result to output file
        filesys.writeFile4String(DATADIR_O + entry, res);
      });

    });
  });
});