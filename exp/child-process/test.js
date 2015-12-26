'use strict';

let child = require('child_process');
let path = require('path');

console.log('#foo');

let option = {
  cwd: __dirname
};

let tests = {
  foo: 'test-foo.js',
  bar: 'test-bar.js'
};

for(let x in tests) {
  
  console.log('## ', x);
  
  let out = child.execSync('node ' + tests[x], option);
  console.log(out.toString());
  
}
