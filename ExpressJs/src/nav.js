import express from "express";
const PORT = 3000
const app = express();



app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.get("/about", (req, res) => {
    res.status(200).send("welcome to about page");
});

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
})