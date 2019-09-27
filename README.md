# personalBlog
React framework, nodejs backend, making notes for code learning

Start from server build

1. Create `package.json`
```
npm init
```

2. install `express`
```
npm i --save express 
```

**q=> npm gloabl install VS npm local install**

1) In general, all the package should be install locally, becuase update a global package would make all the project make the new             release, then it might cuase nightmares in maintance, as some package update might break compatibility and so on

2) install locally make package aviliable to the current project, which stores all the node modules in the node_modules. This is            good for using modules like: var modules =  require('modules');  

3) A package should be installed globally when it provides an executable command that you run from the shell (CLI), and it’s reused           across projects

总结就是，如果这个package可以跨项目重用，比如说ESLint, 那么可以全局安装，否则最好事本地安装， 因为很多package在完成之后会有更新，如果在全局安       装，那么之后的很容易会有confliction，导致project无法正常运行  
    

3. Create an entry js in project
```
personalBlog
├── app.js          #express entry file
└── package.json    #project information and dependencies
```
4. In `app.js`

```
//require express module
const express = require('express');
const app = express();

//add a simple GET api
app.get('/', (req, res) => res.send("Hello World!"));

//start server by listening at port 3000
app.listen(3000, ()=> console.log('Currently listening to port 3000'));
```
5. Run the app with command

```node app.js```

    
