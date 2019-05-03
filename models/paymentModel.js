const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  _tenant: {
    ref: "Apartment",
    type: mongoose.Schema.Types.ObjectId,
    db: "MasterKey",
    required: true
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
