const express = require('express');
const router = express.Router();
const { Users, Posts } = require("./models");
// const { upload } = require("./uploadPhotos")

//<----------------------------------- CRUD OPERATIONS ------------------------------------------>

router.get("/", () => {
    console.log("Server Connected");
})

//<---------------------------- Get Posts from Database ---------------------------->

router.get("/postsdata", (req, res) => {
    
    Posts.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
        return null;
    })
})

//<------------- Get Specific Posts from Database --------------->

router.get("/postsdata/:_id", (req, res) => {
    
    const id = req.params._id;
    Posts.findById(id, (err, data) => {
        if (err) {
            res.status(500).send(err);
            throw new Error(err)
        } else {
            res.status(201).send(data);
        }
        return data;
    })
})

//<---------------------------- Post On the Posts Database ---------------------------->

router.post("/postsdata", (req, res) => {
    
    const db = req.body;
    Posts.create(db, err => {
        if (err) {
            throw new Error(err)
        } else {
            console.log("Posted on Server");
            return res.status(200).json({status: 'success'});
        }
    })
})

//<----------------------------------- Update Posts on the database --------------------------------->

router.put("/postsdata/update/:id", (req, res, next) => {

    const filter = { _id: req.params.id } //Filter Condition
    Posts.findByIdAndUpdate(filter,
        {
            $set: {
                title: req.body.title,
                postBody: req.body.postBody,
                author: req.body.author,
                imagesrc: req.body.imagesrc
            }
        },
        { new: true, useFindAndModify: true },
        err => {
            if (err) {
                console.log(err);
                throw new Error(err)
            } else {
                return res.status(200).json({ status: 'success' });
            }
        }
    )
})

//<---------------------------- Delete Posts from Database ---------------------------->

router.delete("/postsdata/:id", (req, res) => {

    Posts.findOneAndRemove({_id: req.params.id}, err => {
        if (err) {
            console.log(err);
            throw new Error(err)
        } else {
            return res.status(200).json({status: 'success'});
        }
    })
})

//<----------------------------------- CRUD OPERATIONS ------------------------------------------>

module.exports = router;
// Posts.deleteMany({ id: "2" }).then(() => console.log("Deleted").catch(err => console.log(err)))