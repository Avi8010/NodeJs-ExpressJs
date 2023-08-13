const path = require('path');



console.log(path.dirname("D:/Avinash/NodeJs/path-module"));
console.log(path.extname("D:/Avinash/NodeJs/path-module/index.js"));
console.log(path.basename("D:/Avinash/NodeJs/path-module/index.js"));

console.log(path.parse("D:/Avinash/NodeJs/path-module/index.js"))

const my_path = path.parse("D:/Avinash/NodeJs/path-module/index.js");
console.log(my_path.root);
