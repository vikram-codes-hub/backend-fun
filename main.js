require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => { // Ensure 'res' is used correctly here
  res.send('Hi Vikram is this side');
});
app.get('/login',(req,res)=>{
  res.send("<h1>Please login in vikarm company</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
