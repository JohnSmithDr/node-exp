'use strict';

function genBuffer(size) {
  var arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = new Buffer(4096);
  }
  return arr;
}

function genArray(size) {
  var arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = new Buffer(4096).toJSON().data;
  }
  return arr;
}

function genUInt8Array(size) {
  var arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = new Uint8Array(new Buffer(4096));
  }
  return arr;
}

function genHexString(size) {
  var arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = new Buffer(4096).toString('hex');
  }
  return arr;
}

function genBase64String(size) {
  var arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = new Buffer(4096).toString('base64');
  }
  return arr;
}

function genData(stage, sampling) {

  stage = stage.toLowerCase();
  
  switch (stage) {
    case "buffer":
      return genBuffer(sampling);
    case 'array':
      return genArray(sampling);
    case 'uint8array':
      return genArray(sampling);
    case 'hexstring':
      return genArray(sampling);
    case 'base64string':
      return genArray(sampling);
    default:
      return [];
  }

}

module.exports = genData;
