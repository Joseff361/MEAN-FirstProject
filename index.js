const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./app/config/config');
const downloadRouter = require('./app/routes/downloadRouter');
const uploadRouter = require('./app/routes/uploadRouter');

//Initializations
const app = express();
const url = config.mongoUrl;


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//MongoDB
const connect = mongoose.connect(url, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: false  
});

connect.then(cb => {
    console.log('Correctly connected to MongoDB');
}).catch(err => console.log(err));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/upload', uploadRouter);
app.use('/download', downloadRouter);

//Server
app.listen(8080, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Correctly connected to server');
    }
})
