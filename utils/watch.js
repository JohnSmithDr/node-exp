'use strict';

function watch(fn) {
  
  var a, b;
  
  var start = function() {
    b = Date.now();
  }
  
  var stop = function() {
    a = Date.now();
  }
  
  fn(start, stop);
  
  return a - b;
  
}

module.exports = watch;
