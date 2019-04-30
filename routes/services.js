const express = require("express");
const Service = require("../models/serviceModel");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", async (req, res) => {
  // remember to add input verification here
  const service = new Service({
    requestType: req.body.requestType,
    details: req.body.details
  });

  const data = await service.save();

  res.send("got here");
});

router.get("/", async (req, res) => {
  const data = Service.find({})
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

  res.send(data);
});

router.put("/:id", async (req, res) => {
  // grab the id that is inserted. Error if id does not exist
  // send back full object that will be declared based on model

  const serviceId = req.params.id;

  res.send();
});

router.delete("/:id", async (req, res) => {
  // grab the id that is inserted. Error if id does not exist
  // send back full object that will be declared based on model
  res.send("Service request successfully deleted.");
});

module.exports = router;
