#!/usr/bin/env node

var config = null;

if (process.env.CONFIG_PATH) {
  config = require(process.env.CONFIG_PATH + '/config.js');
} else {
  throw new Error('CONFIG_PATH environment variable does\'t exist');
};

// my modules
var LineReader = require('./lineReader.js');
var sendEmail = require('./email');
var reader = new LineReader();
var found = false;


var regex = new RegExp(config.findText, "g");

reader.on('line', function(line) {
  found = regex.exec(line);
  if(found) {
    sendEmail(found['input']);
  }
}).on('close', function() {
  console.log('stream end');
}).on('error', function(err) {
  abort(err.message);
});

reader.read(process.stdin);

/**
 * Exit with the given `str`.
 *
 * @param {String} str
 */
function abort(str) {
  console.error(str);
  process.exit(1);
}
