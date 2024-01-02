const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');
const ENV = require('./environment/environment');

const app = express();
app.use(compression());

const db_Id = ENV.DB_ID;
const DB_pw = ENV.DB_PASSWORD;
const DB = 'mongodb+srv://NicolasRivalant:Nicol%40s2002@cluster0.hzai0cu.mongodb.net/';


// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});



app.use(bodyParser.json());
// app.get('/api/externalData', async (res, req) => {
//     const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=French%20Ligue%201');
//     const data = await response.json();
//     console.log(data);
//     res.json(data);
// });
//ROUTES
const apiRoutes = require('./routes/api');
const scoreFootRoutes = require('./routes/Score');
const userRoutes = require('./routes/user');
app.use('/api/', apiRoutes);
app.use('/api/scoreFoot/', scoreFootRoutes);
app.use('/api/users/', userRoutes);

module.exports = app;