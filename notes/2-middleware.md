**q=>why need `middileware?`**

Middleware functions are function to access the request object(req)and response object(res), and the next function in the application's request-response cycle. The next function in the Express router, when it invokes, it will excute the next middleware. 

1. Install packages required for middleware

```
npm i --save morgan body-parser
```

**q=>what do `morgan` and `body-parser` do?**

`morgan` is used for logging request details.
`body-parser` extract the entire body portion of an incoming request stream and exposes it on `req.body`

2. In `app.js`

```
//require express module
const logger = require('morgan');
const bodyParser = require('body-parser');

//apply the modules as application-level middleware
app.use(logger('dev'));
// support parsing of application/json type post data
app.use(bodyParser.json);
//parses the text as URL encoded data
app.use(bodyParser.urlencoded({ extended: false}));
```

**Some ES6 new rules: <https://webapplog.com/es6/>**

**Note:** `var x = x || 100` equals to if x has falsy value(like `null`, `undefined`, `0` or `""`), assign x with 100, otherwise keep the current value, same as 
```
var x = x ? x : 100;
```

3. Add Error-handling middleware

```
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
```

4. set the port variable
```
//get port from enviroment and store in Express
const port = process.env.PORT || 3000;

//start server by listening at port 3000
app.listen(3000, ()=> console.log(`Server running on http://localhost:${port}`));
```

**Note:** In ES6, double and single quotes can be instead of template literals which are enclosed by the back-tick(``), and

```
`\`` === '`' // --> true
```

- Multi-line strings:

```
console.log('string text line 1\n' +
'string text line 2');
===
console.log(`string text line 1
string text line 2`);
```

- Expression interpolation:
```
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
===
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
```

More usages: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals>




