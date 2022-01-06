const express = require('express');
const router = express.Router();
const { Users, Posts } = require("./models");

//<---------------------------- CRUD OPERATIONS ---------------------------->
router.get("/", (req, res) => {
    res.status(200).send("Works Fine")
});

//<---------------------------- Get Posts ---------------------------->
router.get("/collegedata", (req, res) => {
    Posts.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
        return null;
    });
});

//<---------------------------- Get Students Data ---------------------------->
// router.get("/studentdata", (req, res) => {
//     Posts.find((err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send(data);
//         }
//         return null;
//     });
// })

//<---------------------------- Post On the College Database ---------------------------->
// router.post("/collegedata", (req, res) => {
//     const db = req.body;
//     Posts.create(db, (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send(data);
//         }
//     });
// });

//<---------------------------- Post On the Student Database ---------------------------->
// router.post("/studentdata", (req, res) => {
//     const db = req.body;
//     Posts.create(db, (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send(data);
//         }
//     });
// });

module.exports = router;