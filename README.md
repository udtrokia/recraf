### refile

##### Usage
```js
var refile = require("refile").refile;
var list = require("list").list;

```  

##### API
+ refile  
Recursive queries your files in the path your pass.  
```js
var files = refile("/path/to/your/dir");
```  

+ list  
list all files of the passing ext.  
```js
var ext = list("ext$");
```

