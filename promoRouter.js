const express=require("express");
const bodyparser=require("body-parser");
const promotion=express.Router();
promotion.use(bodyparser.json());

promotion.route("/")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We will give all the promotions to you");
})
.post((req,res)=>{
    res.end("We will providing the promotion to this name "+req.body.name+" with this description "+req.body.description);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("Error found in PUT request")
})
.delete((req,res)=>{
    res.end("Deleting all promotions");
});

promotion.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res)=>{
    res.end("We are assigning you an Promoid "+req.params.promoId);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end("Error found in POST request");
})
.put((req,res)=>{
    res.write("We are updating your promotion id to "+req.params.promoId);
    res.end(" your Promtion details is with this name "+req.body.name+" and with this description "+req.body.description);
})
.delete((req,res)=>{
    res.end("Deleting promtions details with promoId "+req.params.promoId);
});
module.exports=promotion;