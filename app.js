// pulls-in express module in this file.
const express = require("express");

const app = express(); // creating app object as a express function, which of have lot of features and functions provided by express
// it is important how express.js works
//  It's a middleware-driven framework, It means that in the end Express is all about funneling the incoming request through a bunch of different
//  functions which all received the request and all can do something with it and each function can either stop the request and send back a response,
//  at which point the request will not reach any other function thereafter, any other middleware or a function forwards the request to the next function,
//  to the next middleware in line. So a middleware is really just a function that gets the request and then can do something with it.

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next(); // using next(), we are telling this middleware that we are not done till now, so it will go to the next middleware.
}); // we are registering a middleware using 'use' method.

// Please note here order matters for execution of middleware.
app.use((req, res, next) => {
  res.send("<h1>Hello World</h1>");
});
app.listen(3000); // this sets the node server behind the scenes on port 3000
