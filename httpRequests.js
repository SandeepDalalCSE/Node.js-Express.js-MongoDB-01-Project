// pulls-in http module in this file. This is module which is required to work with http requests.
// Note: We can listen to the requests and also we can create requests and send it them to a server.
const http = require("http");
// creating a server
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html"); // here we are setting header to the response.
  response.write("this is this demo response");
  response.end();
});
// listening on port 3000
server.listen(3000);

// Note: doing data parsing and response generations is tough when you deal with large applications.
// We will be using Express.js framework which will make work easy with server/s that will "listen" for any input/connection requests from clients.
