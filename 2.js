const express=require("express")
const app=express()

app.get("/health",(req,res)=>{
    const username=req.headers.username
    const password=req.headers.password
    const kidneyid=req.query.kidneyid

    if(username!="vikram"||password!="viky"){
        req.status(400).json({
            "msg":"Something is up with your inputs"
        })
    }
    if(kidneyid!=1&&kidneyid!=2){
       req.status(400).json({
        "msg":"You have entered wrong kidney id"
       })
    }
    res.json({
        "msg":"Your kidney is fine"
    })
})
// app.listen(3000)
