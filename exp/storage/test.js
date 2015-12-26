'use strict';

let child = require('child_process');
let path = require('path');

var sampling = 10000;
var stages = [
  'Buffer',
  'Array',
  'Uint8Array',
  'HexString',
  'Base64String'
];

var option = {
  cwd: __dirname
};

for(let stage of stages) {
  console.log('#', stage);
  let out = child.execSync(`node --expose-gc test-do.js --stage ${stage} --sampling ${sampling}`, option);
  console.log(out.toString());
}
