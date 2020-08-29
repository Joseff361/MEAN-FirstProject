const express = require('express');
const Images = require('../models/images');
const upload = require('../config/multer');

const downloadRouter = express.Router();

// Accept a single file with the name fieldname. The single file will be stored in req.file.



downloadRouter.route('/')
.get(async (req, res, next) => {
    await Images.find({})
    .then((images) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(images);
    }, (err) => console.log(err))
    .catch(err => console.log(err))
})


module.exports = downloadRouter