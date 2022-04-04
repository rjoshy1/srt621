const port = 3000,
webserver = require("http"),
httpStatuscode = require("http-status-codes");
fs=require("fs");
const sendErrorResponse = respon => {
    respon.writeHead(httpStatuscode.NOT_FOUND, {
      "Content-Type": "text/html"
    });
    respon.write("File cant be found or it doesnt exist</h1>");
    respon.end();
};
webserver
   .createServer((req, respon) => {
     let url =req.url;
     if (url.indexOf(".html")!==-1){
         respon.writeHead(httpStatuscode.OK, {
          "Content-Type":"text/html"
         });
         customReadFile(`./views${url}`,respon);
     }   else if (url.indexOf(".html") !== -1) {
         respon.writeHead(httpStatuscode.OK, {
          "Content-Type":"text/html"
         });
         customReadFile(`./public/js${url}`,respon);
     }   else if (url.indexOf(".css") !== -1) {
         respon.writeHead(httpStatuscode.OK, {
          "Content-Type":"text/css"
         });
         customReadFile(`./public/css${url}`,respon);
     }   else if (url.indexOf(".png") !== -1) {
         respon.writeHead(httpStatuscode.OK, {
          "Content-Type":"image/png"
         });
         customReadFile(`./public/images${url}`,respon);
     }   else  {
         sendErrorResponse(respon);
     }
})
.listen(3000);
console.log(`The port where the server listens ${port}`);
const customReadFile=(file_path, respon) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path,(error,data)=>{
            if (error) {
                console.log(error);
                sendErrorResponse(respon);
                return;
            }
            respon.write(data);
            respon.end();
        });
    }   else {
        sendErrorResponse(respon);
    }
};
