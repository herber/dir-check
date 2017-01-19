const isdir = require('./lib/app.js');

if (isdir('lib')) {
  console.log('is a dir');
} else {
  console.log('is not a dir');
}
