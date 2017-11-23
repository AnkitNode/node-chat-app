const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT||3000;

var app = express();
app.use(express.static(publicPath));

// app.get('/',(req,res)=>{
//   res.send(
// '<h1>My name is Ankit</h1>');
// })
app.listen(3000 ,()=>{
  console.log(`Server started on port 3000`);

})
