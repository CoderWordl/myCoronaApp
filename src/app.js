const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

const tempFolder = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));
// console.log(tempFolder);

app.set("view engine", "hbs");
app.set("views", tempFolder);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render("index");
});

app.get("/about", (req, res) => {
    // res.send("Hello World");
    res.render("about");
});

app.get("/corona", (req, res) => {
    // res.send("Hello World");
    res.render("corona");
});

app.get("/contact", (req, res) => {
    // res.send("Hello World");
    res.render("contact");
});

app.get("*", (req, res) => {
    // res.send("error page");
    res.render("error");
});

app.listen(port, () => {
    console.log(`Yes Man I Am Listening at the port no. ${port}`);
});

// {{!-- COMPLETE WEBSITE IS BUILD --}}