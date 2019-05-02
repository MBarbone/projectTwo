const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  address: String,
  // unit: String,
  city: String,
  state: String,
  zip: Number,
  _tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tenant"
  }
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
