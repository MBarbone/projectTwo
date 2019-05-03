const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  requestType: {
    type: String
  },
  requestDetails: {
    type: String
  },
  _tenant: {
    ref: "Apartment",
    type: mongoose.Schema.Types.ObjectId,
    db: "MasterKey",
    required: false
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
