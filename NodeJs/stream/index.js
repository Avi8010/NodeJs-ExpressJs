const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(data.toString());
    //     res.end(data.toString());
    // });



    // const read_stream = fs.createReadStream("input.txt");
    // read_stream.on('data', (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // read_stream.on('end', () => {
    //     res.end();
    // });

    // read_stream.on('error', (err) => {
    //     console.log(err);
    //     res.end('file not found');
    // });


    const read_stream = fs.createReadStream("input.txt");
    read_stream.pipe(res);
});

server.listen(8000, "127.0.0.1");