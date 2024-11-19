const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (request, response) {
    const path = request.url;
    const q = url.parse(request.url,true).query;
    const filePath = Object.values(q)[0];

    switch (path) {
      case "/":
        response.end("Welcome to the new Server!");
        break;
      case `/file?name=${filePath}`:
        console.log("sdgds");
       fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          response.statusCode = 500;
          response.end("Error reading file!");
        } else {
          response.end(data);
        }})
        break;

      default:
        response.statusCode = 404;
        response.end("Not found!");
        break;
    }
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");
