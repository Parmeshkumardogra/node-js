const express=require("express");
const bodyparser=require("body-parser");
const dish=require("./dishRouter");
const promotions=require("./promoRouter");
const leaders=require("./leaderRouter");
const app=express();
app.use("/dishes",dish);
app.use("/promotions",promotions);
app.use("/leaders",leaders);
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})