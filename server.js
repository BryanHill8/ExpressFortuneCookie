var express = require('express');
var app = express();



var fortune = function(req, res, next) {
    
    var fs = require("fs");

    var cookie = fs.readFile("fortunecookie.txt");
    
    var random = Math.floor((Math.random() * cookie.length));
  res.write(cookie[random]);
    
    next();
};


app.use(fortune);

var date = new Date();
var current_month = date.getMonth();

var leo = function(req, res, next) {
  
  leo = current_month
  res.write("Live, love, laugh");
  next();
};

app.use(leo);

var aries = function(req, res, next) {
  
  aries = current_month
  res.write("Walk the path less traveled.");
  next();
};

app.use(aries);


app.listen(process.env.PORT);
 
console.log('server running');