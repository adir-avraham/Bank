require('dotenv').config();
const exprees = require('express');
const api = exprees();
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./login/login');





api.use(cors());
api.use(bodyParser.json());

api.use('/', login);






api.listen(process.env.PORT, (err) =>{
    if (err) return console.log(err.message);
    console.log(`Api is listening to port: ${process.env.PORT}`)
})