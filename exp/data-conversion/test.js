'use strict';

var child = require('child_process');

var sampling = 10000;

var option = {
  cwd: __dirname
};

var stages = {
  'Buffer': [
    'buffer/toArray',
    'buffer/toUint8Array',
    'buffer/toHexString',
    'buffer/toBase64String'],
  'Array': [
    'array/toBuffer',
    'array/toUint8Array'],
  'Uint8Array': [
    'uint8array/toArray',
    'uint8array/toBuffer',
    'uint8array/toHexString',
    'uint8array/toBase64String'],
  'HexString': [
    'hexstr/toBuffer', 
    'hexstr/toUint8Array'],
  'Base64String': [
    'base64/toBuffer', 
    'base64/toUint8Array']
};

for(let x in stages) {
  console.log('');
  console.log('#', x);
  console.log('');
  for(let y of stages[x]) {
    let out = child.execSync(`node ${y} --sampling ${sampling}`, option);
    console.log(out.toString());
  }
}
