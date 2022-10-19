const express=require("express");
const bodyparser=require("body-parser");
const leaders=express.Router();
leaders.use(bodyparser.json());

leaders.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We will give all the leader details to you");
})
.post((req,res)=>{
    res.end("We will providing the leader name "+req.body.name+" with its description "+req.body.description);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("Error found in PUT request")
})
.delete((req,res)=>{
    res.end("Deleting all leader details");
});

leaders.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We are assigning you an leaderId "+req.params.leaderId);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end("Error found in POST request");
})
.put((req,res)=>{
    res.write("We are updating your leaderId to "+req.params.leaderId);
    res.end(" your leader details is with this name "+req.body.name+" and with this description "+req.body.description);
})
.delete((req,res)=>{
    res.end("Deleting leader details with leaderId "+req.params.leaderId);
});
module.exports=leaders;