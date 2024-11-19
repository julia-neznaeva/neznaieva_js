const http = require("http");

http
  .createServer(function (request, responce) {
    var url = request.url;

    switch (url) {
      case "/":
        responce.end("Welcome to the new Server!");
        break;
      case "/about":
        responce.end("This is a simple http Node.js server");
        break;
      case "/contact":
        responce.end("Contact us at contact@newserver.com");
        break;
      default:
        responce.statusCode = 404;
        responce.end("Not found!");

        break;
    }
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");
