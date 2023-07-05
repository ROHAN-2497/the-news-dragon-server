const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const cors = require('cors')
const news = require('./data/news.json');

app.get('/news', (req,res)=>{
  res.send(news);
})
app.get('/news/:id', (req,res) =>{
  const id = req.params.id;
  console.log(id);
  const selectNews = news.find(n=> n._id === id);
  res.send(selectNews);
})
app.use(cors()); 
app.get("/", (req, res) => {
  res.send("Dragon is Running");
});

app.get('/category/:id', (req, res) =>{
  const id = req.params.id;
  console.log(id);
  const categoryNews = news.filter(n => n.category_id === id);
  res.send(categoryNews)
})

app.get('/categories', (req,res) =>{
    res.send(categories);
} )
app.listen(port, () => {
  console.log(`dragon api is running on port ${port}`);
});
