
const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mtanksingh8:j9nSLVvTqXy3guwF@cluster0.48bak.mongodb.net/User_New")


const User = mongoose.model('Users', { name: String,email:String,password:String });


app.post("/signup",async(req,res)=>{ 
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser=await User.findOne({email:username});
    if(existinguser){
        return res.status(400).json({
            "mssg":"The email is already existed"
        })
    }
    const user = new User({ 
        name: 'Vikram',
        email:'Vik@gmail.com',
        password:'Viky '
    });
    await user.save();
    res.json({
        "mssg":"User is created successfully"
    })

})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
