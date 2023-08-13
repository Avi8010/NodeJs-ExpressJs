
// callback function for Asynchronous

const fs = require('fs');
fs.writeFile('read.txt', "hello", (err) => {
    console.log('hello............');
    console.log(err);
});


fs.readFile('read.txt', 'UTF-8', (err, data) => {
    //console.log(data.toString());
    console.log(data);
})

fs.appendFile('read.txt', ' , added data', (err, data) => {
    console.log('added');
}
);

