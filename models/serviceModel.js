const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  requestType: String,
  requestDetails: String
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
