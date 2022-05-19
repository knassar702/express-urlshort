const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
Service = require("./routes/short.js");

app.use(bodyParser.json());
app.set("/v0.1/", Service);
app.listen(5000, () => {
  console.log("STARTED: http://localhost:5000");
});
