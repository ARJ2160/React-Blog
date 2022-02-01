//jshint esversion:6
//DEFINE BOILERPLATE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes")
const app = express();
require('dotenv').config()
const { MONGODB_URI } = require("./config/keys")

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
app.use(express.json({ limit: "5mb"}));
app.use("/", router);


if (process.env.NODE_ENV === "production") {
    const path = require('path')
    
    app.get("/", (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')))
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}



//DEFINES THE PORT FOR THE APP TO LISTEN TO
let port = process.env.PORT || 5000;

//APP LISTENS TO PORT
app.listen(port, () => {
    if (port === 5000) {
        console.log("Server running on port 5000");
    } else {
        console.log(`Server running on ${port}`);
    }
});