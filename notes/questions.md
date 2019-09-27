1. **npm gloabl install VS npm local install**

- In general, all the package should be install locally, becuase update a global package would make all the project make the new             release, then it might cuase nightmares in maintance, as some package update might break compatibility and so on

- install locally make package aviliable to the current project, which stores all the node modules in the node_modules. This is            good for using modules like: var modules =  require('modules');  

- A package should be installed globally when it provides an executable command that you run from the shell (CLI), and it’s reused           across projects

总结就是，如果这个package可以跨项目重用，比如说ESLint, 那么可以全局安装，否则最好事本地安装， 因为很多package在完成之后会有更新，如果在全局安       装，那么之后的很容易会有confliction，导致project无法正常运行  

2. **why need middileware?**

Middleware functions are function to access the request object(req)and response object(res), and the next function in the application's request-response cycle. The next function in the Express router, when it invokes, it will excute the next middleware. 

3. **what do `morgan` and `body-parser` do?**

- `morgan` is used for logging request details.
- `body-parser` extract the entire body portion of an incoming request stream and exposes it on `req.body`.

