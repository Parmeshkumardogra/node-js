const express=require("express");
const bodyparser=require("body-parser");
const dishRouter=express.Router();
dishRouter.use(bodyparser.json());

dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We will give all the dishes to you");
})
.post((req,res)=>{
    res.end("We will providing the dishes to this name "+req.body.name+" and this description "+req.body.description);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("Error found in PUT request")
})
.delete((req,res)=>{
    res.end("Deleting all dishes");
});

dishRouter.route("/:dishId")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We are assigning you an id "+req.params.dishId);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end("Error found in POST request");
})
.put((req,res)=>{
    res.write("We are updating your promotion id to "+req.params.dishId);
    res.end(" your dish details is "+req.body.name+" with its description "+req.body.description);
})
.delete((req,res)=>{
    res.end("Deleting dish details with dish id "+req.params.dishId);
});
module.exports=dishRouter;