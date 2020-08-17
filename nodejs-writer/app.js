const fs = require("fs");
const process = require("process");
let location = process.env.HTML_LOCATION;

if(!location){
    location = "/app/html"
}

setInterval(() => {
    const date = new Date();
    const html = `<html><body><center>${date}</center></body></html>`;

    fs.writeFile(location+"/index.html", html, err => {
        if(err){
            console.log("fileed write file")
        }else{
            console.log("success write file")
        }
    })
}, 5000)

