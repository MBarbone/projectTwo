const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  }
  //   _apartment: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Apartment",
  //     required: true
  //   }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
