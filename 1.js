
const express=require("express");
const app=express();

const users=[{
    name:"Vikram",
    kidneys:[{
        healthy:false,
    }]
}]

app.use(express.json());
app.get("/",function(req,res){
    const johnkidney=users[0].kidneys;
   const numberofkidneys=johnkidney.length;
   let numberofhealthykidneys=0;
   for(let i=0;i<johnkidney.length;i++){
    if(johnkidney[i].healthy){
        numberofhealthykidneys++;
    }
   }
   let numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
   res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
   });
})

app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"DONE!"
    })
})

app.put("/",function(req,res){
    
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req,res){
    const newkidneys=[];
    if(checkunhealthy()){

        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newkidneys;
        res.json({});
    }else{
        res.status(411).json({
            msg:"You have no bad kidney"
        })
    }
})
function checkunhealthy(){
    let unhealthykidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            unhealthykidney=true;
        }
    }
}

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });