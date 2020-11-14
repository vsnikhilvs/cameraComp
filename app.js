const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./Data");
var bodyparser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/cameraDb");
var app = new express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/data", (req, res) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE");
    Data.find()
    .then((details) => {
        res.send(details);
    })
});

app.listen(3000);