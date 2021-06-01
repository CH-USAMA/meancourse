const express = require('express');

const bodyParser = require('body-parser');
const app = express(); //a big chain of middlewares

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// function syntax ()=>{}
// app.use((req,res,next)=>{
//   console.log('I am in a middleware');
//   next();
// });

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin ,X-Requested-With, Content-Type, Accept");

  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");

  next();
}); //04:06 48%

app.post("/api/posts",(req,res,next)=>{
  const post =  req.body;
  console.log(post);
  res.status(201).json({
    message : "post added successfully"
  });
  // code 200 means everything is ok
  // 201 means everythingis ok while new resource was created
})

app.get('/api/posts',(req,res,next)=>{
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
