'use strict';

var argv = require('minimist')(process.argv.slice(2));
var assert = require('assert');
var Hashtable = require('hashtable');
var watch = require('../../utils/watch');

(function(sampling) {
  
  var span = watch((start, stop) => {
    
    var map = new Hashtable(), t = null;
    
    for(let i = 0; i < sampling; ++i) {
      map.put(`${i}-${i}-${i}`, { foo: 'bar' });
    }
    
    start();
    
    for(let i = 0; i < sampling; ++i) {
      t = map.get(`${i}-${i}-${i}`);
      assert(t['foo'], 'bar');
    }
    
    stop();
    
  });
  
  console.log('# NATIVE-HASHTABLE: span = %sms, avg = %sms', span, span / sampling);
  
})(Number.parseInt(argv['sampling'] || 0));

