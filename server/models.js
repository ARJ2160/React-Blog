const mongoose = require('mongoose');

// <----------------------- Creating Two Schemas ---------------------------------->

const usersSchema = mongoose.Schema({
    id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String | Number },
})

const postsSchema = mongoose.Schema({
    id: { type: String },
    title: { type: String },
    postBody: { type: String },
})

//<----------------------- Creating Two Models ---------------------------------->
const Users = mongoose.model("College", usersSchema);
const Posts = mongoose.model("Posts", postsSchema);

//<----------------------- Export Models ---------------------------------->
module.exports = {
    Users, Posts
}