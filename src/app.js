const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./controller");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
