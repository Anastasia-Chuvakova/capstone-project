const fs = require("fs");
const express = require("express");
const app = express();

const HomeRoutes = require("./routes/HomeRoutes");

app.use(express.json());
app.use(express.static("public"));

//root
app.get("/", (req, res) => {
  res.send("hello from express");
});
//locations
app.use("/", HomeRoutes);

app.listen(5000, () => console.log("Listening on: http://localhost:5000"));
