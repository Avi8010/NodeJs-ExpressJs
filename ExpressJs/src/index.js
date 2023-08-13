const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// app.request(route,callback)

app.set("view engine", "hbs");

// to change the views directory name
const template_path = path.join(__dirname, "../public");

app.set('views', template_path);

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
console.log(static_path);

app.get("", (req, res) => {
    res.render("home");
});


app.get("/", (req, res) => {
    res.send("Hello, Express");
});


app.get("/about", (req, res) => {
    res.send("hello about");
})


app.listen(8000, () => {
    console.log("listening at 8000");
})
