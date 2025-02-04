const express=require("express")
const zod=require("zod")
const app=express();


function validateinput(obj){
    const schema=zod.obj({
        email:zod.string().email(),
        password:zod.string().min(5)
    })
    const response=schema.safeParse(obj)
}
app.use(express.json());


app.post("/",(req,res)=>{
   
    const response=validateinput(req.body)
    if(!response.success){
        res.status(400).json({
            "mssg":"Sorry wrong input"
        })
    }res.json({
        "mssg":`You have ${req.body} kidneys`
    })

})
app.listen(3000)
