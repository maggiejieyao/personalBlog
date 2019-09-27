//require express module
const express = require('express');
const app = express();

//add a simple GET api
app.get('/', (req, res) => res.send("Hello World!"));

//start server by listening at port 3000
app.listen(3000, ()=> console.log('Currently listening to port 3000'));