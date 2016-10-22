# [Felt](https://github.com/cognitom/felt) Example

[Felt](https://github.com/cognitom/felt) Example using [felt-recipe-preact](https://github.com/ezekielchentnik/felt-recipe-preact)

## Using Felt CLI
```sh
felt --recipe preact --src public --port 8080 --watch --debug --update always

```
[More Recipe info here](https://github.com/cognitom/felt#recipes)

## Using [Express](https://github.com/expressjs/express/)

```sh
node server
```

```js
// server.js

const express = require('express');
const felt = require('felt');
const recipe = require('felt-recipe-preact');

const app = express();
const flavor = {
  src: 'public',
  watch:true,
  debug:true,
  update:'always'
};

app.use(felt(recipe, flavor));
app.use(express.static('public'));
app.listen(8080);

console.log('Express Server Running');
```