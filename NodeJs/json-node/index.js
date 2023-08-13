const fs = require('fs');

const data = {
    name: "name",
    age: "21",
}

console.log(data.age);

const json_data = JSON.stringify(data);
console.log(json_data);

const objdata = JSON.parse(json_data);
console.log(objdata);

fs.writeFile('json.json', json_data, (err) => {
    console.log('done');
});

fs.readFile('json.json', 'utf-8', (err, data) => {
    console.log(data);
    console.log(JSON.parse(data));
});
