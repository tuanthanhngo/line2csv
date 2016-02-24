// import global
// tested is OK 2016/02/22 12:30
var fs = require("fs");

module.exports = {
  /////////////////////////////////
  // sync read text file by fs.readFile
  // tested: OK, 2016/02/22 12:30
  readFile2StringSync: function(filepath) {
    //var fs = require("fs");

    // fs.readFileSync(path, 'utf-8');
    return fs.readFileSync(filepath).toString();
  },


  /////////////////////////////////
  // async read text file by fs.readFile
  // not yet to used
  readFile2String: function(filepath) {
    return; //TODO

    //var fs = require("fs");

    console.log("Let's read newly written data");
    fs.readFile(filepath, function (err, data) {
      if (err) {
        return console.error(err);
      }
      strdata = data.toString();
      console.log("Asynchronous read: " + strdata);
      return strdata;
    });
  },


  /////////////////////////////////
  // write text file by fs.writeFile
  // tested: OK, 2016/02/22 12:30
  writeFile4String: function(filepath, str) {
    //var fs = require("fs");

    // create override file
    //var stream = fs.createWriteStream(filepath);

    // output new string
    console.log("Going to write into existing file...");
    fs.writeFile(filepath, str, function(err) {
      if (err) {
         return console.error(err);
      }
      console.log("...Data written successfully!");
    });
  },


};