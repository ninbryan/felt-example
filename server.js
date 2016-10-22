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