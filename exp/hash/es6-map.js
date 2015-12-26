'use strict';

var argv = require('minimist')(process.argv.slice(2));
var assert = require('assert');
var watch = require('../../utils/watch');

(function(sampling) {
  
  var span = watch((start, stop) => {
    
    var map = new Map(), t = null;
    
    for(let i = 0; i < sampling; ++i) {
      map.set(`${i}-${i}-${i}`, { foo: 'bar' });
    }
    
    start();
    
    for(let i = 0; i < sampling; ++i) {
      t = map.get(`${i}-${i}-${i}`);
      assert(t['foo'], 'bar');
    }
    
    stop();
    
  });
  
  console.log('# ES6-MAP: span = %sms, avg = %sms', span, span / sampling);
  
})(Number.parseInt(argv['sampling'] || 0));

