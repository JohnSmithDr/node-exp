'use strict';

var argv = require('minimist')(process.argv.slice(2));
var watch = require('../../utils/watch');

class MyClass {

  constructor(foo, bar, data) {
    this._foo = foo;
    this._bar = bar;
    this._data = data;
  }

  get foo() {
    return this._foo;
  }

  set foo(value) {
    this._foo = value;
  }

  get bar() {
    return this._bar;
  }

  set bar(value) {
    this._bar = value;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

}

(function(sampling) {

  var a, b, r, d = [];

  b = process.memoryUsage();

  for(let i = 0; i < sampling; ++i) {
    d.push(new MyClass('foo', 'bar', new Buffer(4096)));
  }

  a = process.memoryUsage();

  r = {
    tm: (a.rss - b.rss) / 1024 / 1024,
    vm: (a.rss - b.rss) / d.length / 1024,
    hu: a.heapUsed - b.heapUsed,
    vu: (a.heapUsed - b.heapUsed) / 1024
  };

  console.log('# CLASS: mem = %sM, avg = %sKB, heap = %s, heap* = %s ', r.tm, r.vm, r.hu, r.vu);


})(Number.parseInt(argv['sampling'] || 0));

