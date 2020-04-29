const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

const port = process.env.PORT;

//middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("home");
});
app.post("/", async (req, res) => {
  console.log(req.body);




  
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server ti bere lori port ${port}`);
});
