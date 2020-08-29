const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); //null represents no error
    }
});

const imageFileFilter = (req, file, cb) => { //filter of images
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false)
    }
    cb(null, true)
};

var upload = multer({storage: storage, fileFilter: imageFileFilter});
module.exports = upload