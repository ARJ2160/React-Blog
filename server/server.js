//jshint esversion:6

//DEFINE BOILERPLATE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//CONNECTING TO DATABASE
mongoose.connect("mongodb+srv://ARJ:vd7p1VbnxRk7qZ6K@cluster0.3yitx.mongodb.net/datadb?retryWrites=true&w=majority",
    { useNewUrlParser: true, })
        .then(() => {
            console.log("Database Connection Successfull");
        })
        .catch((err) => {
            console.log(err);
        });

//APP CONFIG
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", require("./routes"));


//DEFINES THE PORT FOR THE APP TO LISTEN TO
let port = process.env.PORT;
if(port == null || port == ""){
    port = 5000;
}

//APP LISTENS TO PORT
app.listen(port, () => {
    if (port === 5000) {
        console.log("Server running on port 5000");
    } else {
        console.log("Server running on PORT");
    }
});