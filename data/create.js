// import local
var filesys = require('../wrap/filesys');
var filename = '';
var contentstring = '';
var schar = '';

// breakline follow OS
var NEWLINE = require('os').EOL;

// data test folder path
//var DATADIR_INPUT = __dirname + '/data/01_input/';
var DATADIR_INPUT = __dirname + '/01_input/';


////////////////////////////////////// copy from test design
// 1

filename = '1.txt';
contentstring = '';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 2-1

filename = '2-1.txt';
contentstring = 'Name 01' + NEWLINE + '10';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 2-2

filename = '2-2.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + '20';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 2-3

filename = '2-3.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03' + NEWLINE + '30';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);


// 3-1

filename = '3-1.txt';
contentstring = 'Name 01' ;
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 3-2

filename = '3-2.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 3-3

filename = '3-3.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);


// 4-1

filename = '4-1.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03' + NEWLINE + '30';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 4-3

filename = '4-3.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03' + NEWLINE + '30';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 4-5

filename = '4-5.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 5-1

filename = '5-1.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03' + NEWLINE + '30' + NEWLINE + 'Name 04' + NEWLINE + '40' + NEWLINE + 'Name 05' + NEWLINE + '50';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-2

filename = '5-2.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03' + NEWLINE + 'Name 04' + NEWLINE + '40' + NEWLINE + 'Name 05' + NEWLINE + '50';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-3

filename = '5-3.txt';
contentstring = 'Name 01' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03' + NEWLINE + '30' + NEWLINE + 'Name 04' + NEWLINE + '40' + NEWLINE + 'Name 05';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-4

filename = '5-4.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03' + NEWLINE + 'Name 04' + NEWLINE + '40' + NEWLINE + 'Name 05' + NEWLINE + '50';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-5

filename = '5-5.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03' + NEWLINE + '30' + NEWLINE + 'Name 04' + NEWLINE + 'Name 05' + NEWLINE + '50';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-6

filename = '5-6.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + 'Name 03' + NEWLINE + '30' + NEWLINE + 'Name 04' + NEWLINE + '40' + NEWLINE + 'Name 05';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 5-7

filename = '5-7.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + 'Name 03' + NEWLINE + '30' + NEWLINE + 'Name 04' + NEWLINE + 'Name 05';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 6-1

filename = '6-1.txt';
schar = '\""';
contentstring = 'Name 6-1' + schar + NEWLINE + '61';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-2

filename = '6-2.txt';
schar = '\'';
contentstring = 'Name 6-2' + schar + NEWLINE + '62';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-3

filename = '6-3.txt';
schar = ',';
contentstring = 'Name 6-3' + schar + NEWLINE + '63';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-4

filename = '6-4.txt';
schar = '\\';
contentstring = 'Name 6-4' + schar + NEWLINE + '64';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-5

filename = '6-5.txt';
schar = '\/';
contentstring = 'Name 6-5' + schar + NEWLINE + '65';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-6

filename = '6-6.txt';
schar = '{';
contentstring = 'Name 6-6' + schar + NEWLINE + '66';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-7

filename = '6-7.txt';
schar = '}';
contentstring = 'Name 6-7' + schar + NEWLINE + '67';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-8

filename = '6-8.txt';
schar = '[';
contentstring = 'Name 6-8' + schar + NEWLINE + '68';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-9

filename = '6-9.txt';
schar = ']';
contentstring = 'Name 6-9' + schar + NEWLINE + '69';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-10

filename = '6-10.txt';
schar = '\t';
contentstring = 'Name 6-10' + schar + NEWLINE + '610';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-11

filename = '6-11.txt';
schar = '\b';
contentstring = 'Name 6-11' + schar + NEWLINE + '611';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-12

filename = '6-12.txt';
schar = '\f';
contentstring = 'Name 6-12' + schar + NEWLINE + '612';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-13

filename = '6-13.txt';
schar = '\n';
contentstring = 'Name 6-13' + schar + NEWLINE + '613';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-14

filename = '6-14.txt';
schar = '\r';
contentstring = 'Name 6-14' + schar + NEWLINE + '614';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 6-15

filename = '6-15.txt';
schar = '\\u';
contentstring = 'Name 6-15' + schar + NEWLINE + '615';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 7-1

filename = '7-1.txt';
contentstring = '' + NEWLINE + 'Name 01';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-2

filename = '7-2.txt';
contentstring = 'Name 01' + NEWLINE + '' + NEWLINE + 'Name 02';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-3

filename = '7-3.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + '';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-4

filename = '7-4.txt';
contentstring = '    ' + NEWLINE + 'Name 01';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-5

filename = '7-5.txt';
contentstring = 'Name 01' + NEWLINE + '    ' + NEWLINE + 'Name 02';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-6

filename = '7-6.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + '    ';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-7

filename = '7-7.txt';
contentstring = '\t' + NEWLINE + 'Name 01';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-8

filename = '7-8.txt';
contentstring = 'Name 01' + NEWLINE + '\t\t' + NEWLINE + 'Name 02';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 7-9

filename = '7-9.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + '\t\t\t';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);

// 8-1

filename = '8-1.txt';
contentstring = '10' + NEWLINE + 'Name 02';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 8-2

filename = '8-2.txt';
contentstring = 'Name 01' + NEWLINE + '10' +  NEWLINE + '20' + NEWLINE + 'Name 03';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
// 8-3

filename = '8-3.txt';
contentstring = 'Name 01' + NEWLINE + '10' + NEWLINE + 'Name 02' + NEWLINE + '20' + NEWLINE + '30';
filesys.writeFile4String(DATADIR_INPUT + filename, contentstring);
