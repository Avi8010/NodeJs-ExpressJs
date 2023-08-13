const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readdirSync("home.html", 'utf-8');

const replaceVal = (temp, val) => {
    let temperature = temp.replace("{%tempval%}", val.main.temp);
    temperature = temp.replace("{%tempmin%}", val.main.temp_min);
    temperature = temp.replace("{%temp_max%}", val.main.temp_max);
    temperature = temp.replace("{%location%}", val.name);
    temperature = temp.replace("{%Country%}", val.sys.country);
    temperature = temp.replace("{%tempstatus%}", val.weather[0].main);
}


const server = http.createServer((req, res => {
    if (req.url == "/") {
        requests("http://Api.openweathermap.org/data/2.5/weather?q=Puneb&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263")
            .on("data", (chunk) => {
                const obj_data = JSON.parse(chunk);
                const arr_data = [obj_data];
                console.log(arr_data);

                const realtime_data = arr_data.map((val) => {
                    replaceVal(homeFile, val);
                })
            })
            .on("end", (err) => {
                if (err) return console.log("eroooooor", err);
                console.log("end");
            })
    }


}));

server.listen(8000, "127.0.0.1")