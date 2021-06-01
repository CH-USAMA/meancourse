const express = require('express');
const app = express(); //a big chain of middlewares
// function syntax ()=>{}
// app.use((req,res,next)=>{
//   console.log('I am in a middleware');
//   next();
// });

app.use('/api/posts',(req,res,next)=>{
  const posts = [
    {
      id:"1",
      title:"Usama here",
      content:"This is coming form server"
    },
    {
      id:"2",
      title:"Danish here",
      content:"This is also coming form server"
    }
  ];
  res.status(200).json({
    message:"Post fetched Successfully",
    posts: posts
  })
});

app.use((req,res,next)=>{
  res.send('I am in a another function now');
});


module.exports = app;
