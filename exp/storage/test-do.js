'use strict';

var argv = require('minimist')(process.argv.slice(2));
var data = require('./data');

var stage = argv['stage'];
var sampling = Number.parseInt(argv['sampling'] || 0);

var d, b, a, r;

b = process.memoryUsage();
d = data(stage, sampling);
global.gc();
a = process.memoryUsage();

r = {
  tm: (a.rss - b.rss) / 1024 / 1024,
  vm: (a.rss - b.rss) / d.length / 1024,
  hu: a.heapUsed - b.heapUsed,
  vu: (a.heapUsed - b.heapUsed) / 1024
};

//console.log('BEFORE: ', b);
//console.log('AFTER:  ', a);
console.log('  * mem = %sM, avg = %sKB, heap = %s, heap* = %s ', r.tm, r.vm, r.hu, r.vu);
