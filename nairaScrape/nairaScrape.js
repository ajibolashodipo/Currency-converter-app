const puppeteer = require("puppeteer");
let scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url =
    "https://www.google.com/search?q=1usd+to+ngn&rlz=1C1CHFX_enTR795TR795&oq=1usd+to+ngn&aqs=chrome..69i57j0l6.3519j1j9&sourceid=chrome&ie=UTF-8";

  const selector =
    "#knowledge-currency__updatable-data-column > div.H07hi > table > tbody > tr:nth-child(3) > td:nth-child(1) > input";

  await page.goto(url);

  // Scrape
  await page.click(selector);
  //   await page.waitFor(1000);
  const result = await page.evaluate(() => {
    let conversionRate = document.querySelector(".a61j6").value;

    return { conversionRate };
  });
  browser.close();
  return result;
};

module.exports = scrape;
