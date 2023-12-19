const express = require("express");
const data = require("./data");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello backend");
});

app.post("/about", (req, res) => {
  res.json(data);
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("server is running on the port 5000");
});
