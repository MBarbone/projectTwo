const User = require("../models/userModel");
const mongoose = require("mongoose");
const express = require("express");
const { check } = require("express-validator/check");

const router = express.Router();

router.post(
  "/",
  [check("email").isLength({ min: 3 }), check("password").isLength({ min: 3 })],
  async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send(
          "You are not authorized to be registered. Please contact building management"
        );

    if (user.password) return res.status(401).send("Already Registered!");

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send(token);
  }
);

module.exports = router;
