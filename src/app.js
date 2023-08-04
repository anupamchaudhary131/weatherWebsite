const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticpath));

app.get("/", (req, res) =>{
    res.render("index.hbs")
})

app.get("/about", (req, res) =>{
    res.render("about.hbs")
})

app.get("/weather", (req, res) =>{
    res.render("weather.hbs")
})

app.get("*", (req, res) =>{
    res.render("error.hbs", {
        errormsg: 'Oops! page not found'
    })
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);0
})