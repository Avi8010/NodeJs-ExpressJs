const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.end("hello");
// })

const server = http.createServer((req, res) => {
    const json_data = fs.readFileSync(`${__dirname}/userapi/userapi.json`, 'utf-8')
    const data = JSON.parse(json_data);
    console.log(data);

    if (req.url == "/") {
        res.end("Hello home");
    }
    else if (req.url == '/userapi') {
        //res.writeHead(200, { "content-type": "application/json" });
        res.end(data.toString());

    }
    else if (req.url == "/about") {
        res.end("Hello About");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening at 8000");
});