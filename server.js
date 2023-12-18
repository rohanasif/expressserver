// app.js
const express = require("express");
const data = require("./data");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
