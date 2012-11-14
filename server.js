// my modules
var LineReader = require('./lineReader.js');
var sendEmail = require('./email');
var config = require('./config.js');

var reader = new LineReader();
var regex = new RegExp(config.findText, "g");
var found = false;

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
