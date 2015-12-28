'use strict';

var argv = require('minimist')(process.argv.slice(2));
var watch = require('../../utils/watch');

(function(sampling) {

  var a, b, r, d = [];

  b = process.memoryUsage();

  for(let i = 0; i < sampling; ++i) {
    d.push({
      foo: 'foo',
      bar: 'bar',
      data: new Buffer(4096)
    });
  }

  a = process.memoryUsage();

  r = {
    tm: (a.rss - b.rss) / 1024 / 1024,
    vm: (a.rss - b.rss) / d.length / 1024,
    hu: a.heapUsed - b.heapUsed,
    vu: (a.heapUsed - b.heapUsed) / 1024
  };

  console.log('# OBJECT: mem = %sM, avg = %sKB, heap = %s, heap* = %s ', r.tm, r.vm, r.hu, r.vu);


})(Number.parseInt(argv['sampling'] || 0));

