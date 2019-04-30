const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const Apartment = require("../models/apartmentModel");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", async (req, res) => {
  // remember to add input verification here

  let apartment = new Apartment({
    address: req.body.address,
    unit: req.body.unit,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  });

  apartment = await apartment.save();

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    _apartment: apartment._id
  });

  user = await user.save();

  apartment._tenant = tenant._id;

  apartment = await apartment.update();

  res.send(apartment);
});

module.exports = router;
