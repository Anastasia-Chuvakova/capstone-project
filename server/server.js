const fs = require("fs");
const express = require("express");
const app = express();

const QuoteRoutes = require("./routes/QuoteRoutes");
const TimersRoutes = require("./routes/TimersRoutes");

app.use(express.json());
app.use(express.static("public"));

//root
app.get("/", (req, res) => {
  res.send("hello from express");
});
//locations
app.use("/home", QuoteRoutes);
app.use("/timers", TimersRoutes);

app.listen(5000, () => console.log("Listening on: http://localhost:5000"));
