const port = 8989,
   http = require("http"),
   Statushttp = require("http-status-codes");
   app = http.createServer((request, responsesent) => {
   console.log("Request");
   responsesent.writeHead(Statushttp.OK, {
      "Content-Type" : "text/html",
    });
    current = new Date();
    l= "Current Date and Time =>"+current;
    responsesent.write(l);
    responsesent.end();
    console.log(`Response : ${l}`);
});
app.listen(port);
console.log(`The server is listening to: ${port}`);
