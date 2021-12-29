const mongoose = require('mongoose');

// <----------------------- Creating Two Schemas ---------------------------------->

const userSchema = mongoose.model({
    id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String | Number },
})

const postsSchema = mongoose.Schema({
    id: { type: String },
    title: { type: String },
    postBody: { type: String },
    image: { type:  },
})