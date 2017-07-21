/* eslint-disable no-console */
/**
 * Created by David on 7/20/17.
 */

require('dotenv').config({silent: true}); // load environment variables from .env file

// require('gulp').start('default');

require('child_process').exec('gulp --gulpfile ./hello-watson/gulpfile.js', function(error, stdout, stderr) {
  console.log(stdout);
  if (error) {
    console.log(error, stderr);
  } else {
    require('./hello-watson/server');
  }
});
