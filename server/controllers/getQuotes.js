const fs = require("fs");

const getQuotes = () => {
  const quoteData = JSON.parse(
    fs.readFileSync("./controllers/model/quotes.json")
  );
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quote = quoteData[randomIndex];
  return quote;
};
module.exports = { getQuotes };
