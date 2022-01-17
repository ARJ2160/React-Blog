const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
const url = ~
const storage = new GridFsStorage({ url });
const upload = multer({ storage });