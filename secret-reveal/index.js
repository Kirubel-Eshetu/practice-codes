import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const dirName = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

//Alternatively you can create a varible to contain user authorization. You can also create your own Middleware function.
// var userAuthorized = false;
/* function secretReveal(req, res, next){
var password = req.body["password"];
if(password === "ILoveProgramming"){
userAuthorized = true;
}
next();
}

app.use(secretReveal);

app.post("/check", (req, res)=>{
    if(userAuthorized){
    res.sendFile(dirName+"/public/secret.html");
    } else{
    res.sendFile(dirName+"/public/secret.html"); //Alternatively res.sendFile("/");
    }
    });


*/


app.get("/", (req, res)=>{
    res.sendFile(dirName + "/public/index.html");
});

app.post("/check", (req, res)=>{
    if(req.body["password"] === "ILoveProgramming"){
        res.sendFile((dirName + "/public/secret.html"));
    } else{
        res.redirect("/");
    }
});

app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});



