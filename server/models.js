const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// <----------------------- Creating Two Schemas ---------------------------------->

// const usersSchema = mongoose.Schema({
//     _id: String,
//     firstName: type: String,
//     lastName: type: String,
//     password: type: String,
// })

const postsSchema = new Schema({
    _id: String,
    title: String,
    author: String,
    postBody: String,
    imagesrc: String
})

//<----------------------- Creating Two Models ---------------------------------->
// const Users = mongoose.model("Users", usersSchema);
const Posts = mongoose.model("Post", postsSchema);

//<----------------------- Export Models ---------------------------------->
module.exports = {
    Posts
}