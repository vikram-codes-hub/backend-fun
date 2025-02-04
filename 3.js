const express=require("express")
const app=express()

let totaltime=0
let totalreq=0

  function requestTimeaverage(req,res,next){
    let starttime=Date.now();
    res.on('finish',()=>{

        const currenttime=Date.now()-starttime;
        totaltime+=currenttime;
        totalreq++;
    })
    next();
  }
app.use(requestTimeaverage);
app.get("/",(req,res)=>{
    res.send("Hello visitor")
})
app.get("/avg-time",(req,res)=>{
    if(totalreq==0){
        return res.send("No req have been made")
    }
    const avg=totaltime/totalreq;
    res.send(`The toal avg time is ${avg.toFixed(2)}ms ans the req count is ${totalreq}`)
    
})

app.listen(3000)