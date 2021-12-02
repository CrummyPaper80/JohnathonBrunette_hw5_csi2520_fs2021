const express = require("express");

const ejs = require("ejs");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/resume', function(req, res) {
  res.render('../views/resume.ejs');
});

app.get('/fun_facts', function(req, res) {
  res.render('../views/fun_facts.ejs');
});

app.get('/blog', function(req, res) {
  res.render('../views/blog.ejs');
});

app.get('/trivia', function(req, res) {
  res.render('../views/trivia.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));