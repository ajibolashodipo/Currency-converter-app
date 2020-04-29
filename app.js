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
  res.render("index");
});
app.get("/convert", async (req, res) => {
  try {
    //console.log(req.body);
    let sourceVal = req.query.sv;
    let sourceCurr = req.query.mc1;
    let destCurr = req.query.mc2;
    let nairaToDollar = 389.7;

    //if source currency is Naira
    if (sourceCurr === "NGN") {
      console.log("agbeke");
      sourceCurr = "USD";
    }

    //if destination currency is Naira
    if (destCurr === "NGN") {
      console.log("agbeke");
      destCurr = "USD";
    }

    const response = await axios.get(
      `https://prime.exchangerate-api.com/v5/${key}/latest/${sourceCurr}`
    );

    let converted = await response.data.conversion_rates[destCurr];
    console.log("shoeeeeee");
    console.log(converted);
    //converted = converted / nairaToDollar;
    console.log(typeof converted);

    if (sourceCurr === "NGN") {
      //converted = converted / nairaToDollar;
      console.log("aji" + converted);
    }

    if (destCurr === "NGN") {
      // converted = converted * nairaToDollar;
      console.log("shod" + converted);
    }

    let final = converted * sourceVal;
    console.log("serendi");
    console.log(final);
    // res.redirect("/?final=" + final);
    res.send({ final: final });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server ti bere lori port ${port}`);
});
