const fs = require('fs');


//fs.writeFileSync('read.txt', 'happy');
//fs.appendFileSync('read.txt', ' very happy');


//fs.writeFileSync('read.txt', 'not happy');
//const data = fs.readFileSync('read.txt');
const data = fs.readFileSync('read.txt', 'utf-8');
console.log(data);


my_data = data.toString();
console.log(my_data);

//fs.unlinkSync('read.txt')
