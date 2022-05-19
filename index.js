const express = require("express"),
  app = express(),
  bodyParser = require("body-arser");
Service = require("routes/short");

app.use(bodyParser.json());
app.use("/v0.1/", Service);
app.listen(5000, () => {
  console.log("STARTED: http://localhost:5000");
});
