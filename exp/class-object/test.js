'use strict';

var child = require('child_process');

var sampling = 100000;

var option = {
  cwd: __dirname
};

var stages = ['object-instance', 'class-instance'];

console.log('');

for (let x of stages) {
  let out = child.execSync(`node ${x} --sampling ${sampling}`, option);
  console.log(out.toString());
}
