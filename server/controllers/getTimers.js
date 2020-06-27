const fs = require("fs");

const getTimers = () => {
  const data = JSON.parse(fs.readFileSync("./controllers/model/timers.json"));

  return data;
};

module.exports = { getTimers };
