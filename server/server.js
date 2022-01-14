//jshint esversion:6
//DEFINE BOILERPLATE
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes")
const app = express();

//CONNECTING TO DATABASE
mongoose.connect("mongodb+srv://admin:admin@blog-cluster.jgv4u.mongodb.net/blog-cluster?retryWrites=true&w=majority",
    { useNewUrlParser: true, })
        .then(() => {
            console.log("Successfully Connected to Database");
        })
        .catch(err => {
            console.log(err);
        });

//APP CONFIG
app.use(cors());
app.use(express.json());
app.use("/", router);

//DEFINES THE PORT FOR THE APP TO LISTEN TO
let port = process.env.PORT;
// eslint-disable-next-line eqeqeq
if(port == null || port == ""){
    port = 5000;
}

//APP LISTENS TO PORT
app.listen(port, () => {
    if (port === 5000) {
        console.log("Server running on port 5000");
    } else {
        console.log(`Server running on ${port}`);
    }
});