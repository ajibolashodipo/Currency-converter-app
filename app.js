const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const usdToNaira = require("./nairaScrape/nairaScrape");
require("dotenv").config();
const port = process.env.PORT;
const key = process.env.API_KEY;

// async function run() {
//   let value = await usdToNaira();
//   console.log(value);
// }
// run();

//middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.render("index");
});
app.get("/convert", async (req, res) => {
  try {
    let sourceVal = req.query.sv;
    let sourceCurr = req.query.mc1;
    let destCurr = req.query.mc2;
    let sourceNaira = req.query.mc1;
    let valued = await usdToNaira();
    let rateNaira = parseInt(valued.conversionRate);
    let destNaira = req.query.mc2;
    let nairaToDollar = rateNaira || 389.7;

    //check if source currency is Naira
    if (sourceCurr === "NGN") {
      sourceCurr = "USD";
    }
    // check if destination currency is Naira
    if (destCurr === "NGN") {
      destCurr = "USD";
    }

    //make and await the http request
    const response = await axios.get(
      `https://prime.exchangerate-api.com/v5/${key}/latest/${sourceCurr}`
    );
    //conversion rate
    let converted = await response.data.conversion_rates[destCurr];

    //convert to naira since API does not support Naira
    if (sourceNaira === "NGN") {
      convertedTemp = converted / nairaToDollar;
      converted = convertedTemp;
    }
    //convert to naira since API does not support Naira
    if (destNaira === "NGN") {
      convertedTemp = converted * nairaToDollar;
      converted = convertedTemp;
    }
    //Final value
    let tempFinal = converted * sourceVal;
    let final = tempFinal.toFixed(2);

    //this solves the floating point problem should source and destination be the same
    if (sourceNaira === "NGN" && destNaira === "NGN") {
      final = sourceVal;
    }

    res.send({ final: final });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`server ti bere lori port ${port}`);
});
