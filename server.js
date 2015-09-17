var express = require('express');
var app = express();



var fortune = function(req, res, next) {
    
    var fs = require("fs");

    var cookie = fs.readFile("fortunecookie.txt");
    
   // var random = Math.floor((Math.random() * cookie.length));
  //res.write(cookie[random]);
    
    res.end();
};


app.use(fortune);


app.listen(process.env.PORT);
 
console.log('server running');