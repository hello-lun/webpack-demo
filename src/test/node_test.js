const path = require('path');

let myPath1 = path.resolve(__dirname, '/img/so');

let myPath2 = path.join(__dirname, '/img/so');

let myPath3 = path.resolve('/foo/bar', '../baz');
let myPath5 = path.join('/foo/bar', '../baz');

console.log(myPath1, '<<-=-==-=>>', myPath2, '============>', myPath3, myPath5);
