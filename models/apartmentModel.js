const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  zip: Number
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
