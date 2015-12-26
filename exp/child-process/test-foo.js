'use strict';

let range = require('../../utils').range;

let len = Math.round(Math.random() * 100);
let arr = range(0, len);

console.log(arr.length);
console.log(process.memoryUsage());
