const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express()
const port = process.env.PORT || 8001
const staticPath = path.join(__dirname, "../public")
const staticTemplate = path.join(__dirname, "../templates/views")
const partialsPath =   path.join(__dirname, "../templates/partials")
// to set view engine 
app.set("view engine", "hbs");
app.set("views", staticTemplate);
hbs.registerPartials(partialsPath)

// to create template engine route 

// home page 
app.get("", (req, res) => {
    res.render('index',{
        name:"hariom"
    });
})

// about page 
app.get("/about", (req, res) => {
    res.render('about',{
        detail:"Hii , i am full stack developer ."
    });
})



app.use(express.static(staticPath))


app.get("/", (req,res)=>{
    res.send("Welcome to Codingseekho....")
})

app.get("/about/*", (req, res) => {
    res.render('404',{
        notfound:"Sorry This About us page not Exits..!"
    });
})

app.get("*", (req, res) => {
    res.render('404',{
        notfound:"Sorry This page not Exits..!"
    });
})

app.listen(port, ()=>  {
    console.log(`Port Running on  ${port}`);
})