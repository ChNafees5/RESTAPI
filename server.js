require ('dotenv').config()
var mongoose =require('mongoose');
const express = require('express');
const app = express();
//var mongoDB = 'mongodb://localhost:27017/test';

mongoose.connect( process.env.database_url, {useNewUrlParser: true, useUnifiedTopology: true});  
var db = mongoose.connection;


db.on('error', (error) => {console.error(error)});
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => { console.log('connect to database')});
app.use(express.json())
const susbrcriberRouter= require('./router/susbrcriber')
app.use('/susbrcriber', susbrcriberRouter)
 
app.listen(3000, () => { console.log('Connection is setup')})

 
 
 
 