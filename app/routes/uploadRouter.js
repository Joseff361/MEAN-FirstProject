const express = require('express');
const Images = require('../models/images');
const upload = require('../config/multer');

const uploadRouter = express.Router();

// Accept a single file with the name fieldname. The single file will be stored in req.file.



uploadRouter.route('/')
.post(upload.single('file'), async (req, res, next) => {
    console.log(req)
    await Images.create({
        filename: req.body.name,
        url: 'images\\' + req.file.filename
    })
    .then((image) => {
        console.log('Image added ', image);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(image);
    }, (err) => console.log(err))
    .catch(err => console.log(err))
})


module.exports = uploadRouter