const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

require("dotenv").config();

const port = process.env.PORT;
const key = process.env.API_KEY;

//middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("home");
});
app.post("/", async (req, res) => {
  try {
    //console.log(req.body);
    let sourceVal = req.body.sourceVal;
    let sourceCurr = req.body.currencies[0];
    let destCurr = req.body.currencies[1];

    const response = await axios.get(
      `https://prime.exchangerate-api.com/v5/${key}/latest/${sourceCurr}`
    );

    let converted = response.data.conversion_rates[destCurr];
    let final = converted * sourceVal;
    console.log(final);
    res.redirect("/?final=" + final);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server ti bere lori port ${port}`);
});
