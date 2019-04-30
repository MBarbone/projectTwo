const express = require("express");
const Payment = require("../models/paymentModel");
const auth = require("../middleware/auth");
const { check } = require("express-validator/check");

const router = express.Router();

router.post("/", [auth], async (req, res) => {
  // remember to add input verification here
  const payment = new Payment({ amount: req.body.amount });

  const data = await payment.save();

  res.send("got here");
});

// manager payment get
router.get("/", [auth], async (req, res) => {
  if (manager) {
    const payments = await Payment.find({});
    res.send(payments);
  } else {
    Payment.find({ email: req.body.email });
    res.send(payments);
  }
});

module.exports = router;
