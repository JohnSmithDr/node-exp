'use strict';

var argv = require('minimist')(process.argv.slice(2));
var assert = require('assert');
var watch = require('../../../utils/watch');

(function(sampling) {
  
  var span = watch((start, stop) => {
    
    var d = new Array(sampling), t = null;
  
    for(let i = 0; i < sampling; ++i) {
      d[i] = new Uint8Array(4096);
    }
  
    start();
    for(let i = 0; i < sampling; ++i) {
      t = new Buffer(d[i]);
      assert.equal(t.length, d[i].length);
    }
    stop();
    
  });
  
  console.log('  -> Buffer: span = %sms, avg = %sms', span, span / sampling);
  
})(Number.parseInt(argv['sampling'] || 0));