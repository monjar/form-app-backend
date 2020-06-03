const express = require("express");
const router = express.Router();
service = require("./service");

router.get("/forms/:id", (req, res) => {
  const [data, err] = service.getOne(req.params["id"]);
  if (err) res.status(404).send("Form not found.");
  else res.status(200).send(data);
});

router.get("/forms", (req, res) => {
  res.status(200).send(service.getAll());
});

router.post("/forms/submit", (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(200).send();
});

router.post("/forms", (req, res) => {
  service.add(req.body);
  res.status(200).send();
});

module.exports = router;
