const fs = require("fs");

// const getTimers = () => {
//   // read file
//   const timer = JSON.parse(fs.readFileSync("./controllers/model/data.json"));
//   // map data to all inventory
//   const timers = array.map((location) => location.timers).flat();
//   return timer;
// };
const getTimers = () => {
  const data = JSON.parse(fs.readFileSync("./controllers/model/timers.json"));
  //const timer = data.map((location) => location.timer).flat();
  return data;
};

// const getTimerId = (id) => {
//   const data = JSON.parse(fs.readFileSync("./controllers/model/timers.json"));
//   const timers = data.map((location) => location.timers).flat();
//   const timer = timers.find((timer) => timer.id === id);
//   return timer;
// };

module.exports = { getTimers };
