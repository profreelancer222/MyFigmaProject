const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const router = require('./src/router');
const sequelize = require('./config/database');
const User = require('./models/user');



const app = express();
const cors = require("cors");
app.use(cors());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use .env file 
require('dotenv').config()

//Check Mongod server

  try {
    sequelize.sync({ force: false }); // { force: true } will drop existing tables
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database tables:', error);
  }

  // open PORT 
app.listen(process.env.PORT , () => {
  console.log("Server is running!");
}); 

//Serve Router
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
});

// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));



app.use("/api", router);