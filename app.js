// pulls-in express module in this file.
const express = require("express");

// Instead of manually parsing the body of request and response, with Express.js we can use a middleware that does this body parsing for us.
// there are third-party packages which can be integrated into this Express middleware flow that do that for us and the very popular package
// for parsing the request body and adding it to the request object,so adding the parsed body to the request object is the 'body-parser package'.
// importing body-parser package
const bodyParser = require("body-parser");

const app = express(); // creating app object as a express function, which of have lot of features and functions provided by express

// now we need to tell Express.js, which supports such templating engines as they are called, that we want to use this templating engine
app.set("view engine", "ejs"); // and we do tell Express us if we want to do that by calling the set method on the app object which allows us to set up some global options and there we want to set the view engine.
app.set("views", "views"); // then we also tell Express.js where it finds our views and for that we add a views setting and point at the folder that holds our view files and in my case, that's will be views

// it is important how express.js works
//  It's a middleware-driven framework, It means that in the end Express is all about funneling the incoming request through a bunch of different
//  functions which all received the request and all can do something with it and each function can either stop the request and send back a response,
//  at which point the request will not reach any other function thereafter, any other middleware or a function forwards the request to the next function,
//  to the next middleware in line. So a middleware is really just a function that gets the request and then can do something with it.

app.use(bodyParser.urlencoded({ extended: false })); // say if receive form data.

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next(); // using next(), we are telling this middleware that we are not done till now, so it will go to the next middleware.
}); // we are registering a middleware using 'use' method.

// Please note here order matters for execution of middleware.
app.use((req, res, next) => {
  const userName = req.body.username || "Unknown User";
  res.send(`<h1> Hi ${userName}</h1><form method="POST" action="/"><input name="username"><button type="submit">SUBMIT</button></form>`);
  //   res.send("<h1>Hello World</h1>");
});
app.listen(3000); // this sets the node server behind the scenes on port 3000
