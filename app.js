//require express module
const express = require('express');
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');

//apply the modules as application-level middleware
app.use(logger('dev'));
// support parsing of application/json type post data
app.use(bodyParser.json);
//parses the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false}));

//add a simple GET api
app.get('/', (req, res) => res.send("Hello World!"));

//catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status =  404;
    next(err);
});

//error handler
app.use((err, req, res, next) => {
    res.send(err.message);
});

//get port from enviroment and store in Express
const port = process.env.PORT || 3000;

//start server by listening at port 3000
app.listen(3000, ()=> console.log(`Server running on http://localhost:${port}`));