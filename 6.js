const express = require("express");
const jwt = require('jsonwebtoken');
const jwtpass = "12346738"
const app = express()


app.use(express.json());

const all_users=[ 
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
      },
      {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
      },
      {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
      },
    ]

    function userexist(username,password){
        let userexist=false;
        for(let i=0;i<all_users.length;i++){
            if(all_users[i].username===username&&all_users[i].password===password){
                userexist=true
            }
        }
        return userexist;
    }

    app.post("/signin",(req,res)=>{
        const username=req.body.username
        const password=req.body.password

        if(!userexist(username,password)){
            return res.status(400).json({
                msg: "User doesnt exist in our in memory db",
            })
        }
        var token=jwt.sign({username:username},jwtpass)
        res.json({
            token
        })
    })
    app.get("/users", function (req, res) {
       const token=req.headers.authorization;
       const decoded=jwt.verify(token,jwtpass);
       const username=decoded.username
        res.json({
          users: all_users
        })
      });

app.listen(3000);