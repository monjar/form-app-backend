const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./controller");
var path = require("path");
require("dotenv").config();
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT, () => console.log(`Port: ${process.env.PORT}`));
