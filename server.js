//jshint esversion:6
//DEFINE BOILERPLATE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/routes")
const app = express();
require('dotenv').config()
const { MONGODB_URI } = require("./config/keys")
const path = require("path")
let port = process.env.PORT || 5000;

//CONNECTING TO DATABASE
mongoose.connect(MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology : true })
        .then(() => {
            console.log("Successfully Connected to Database");
        })
        .catch(err => {
            console.log(err);
        });

//APP CONFIG
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "client", "build")))
app.use("/", router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//APP LISTENS TO PORT
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});