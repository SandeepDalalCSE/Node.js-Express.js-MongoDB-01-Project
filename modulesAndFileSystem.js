// this will pulls-in File System Module in this js file. This fs module is already installed with node.js server.
const fs = require("fs");

fs.writeFile("user-data.txt", "userName = Sandeep Dalal", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("wrote to file!");
  }
});
