const express = require('express');



//Create a route
const app = express();



//When the get request is called it will send Hello
//(req,res) is an object that takes in a request and response
// ( , ) => is ES6 style

app.get( '/', (req,res)  => res.send('Hello'));

//The process.port.env.PORT is to port to heroku
//5000 is for port 5000
// Means we either port to heroku or port 5000

const port = process.env.PORT || 5000;

//Then you have the app listen onto the port
//Have the console spit back If it's running

app.listen(port , () => console.log('Server Running on port ${port}'));

