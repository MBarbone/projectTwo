const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    leaseStart: {
        type: Date,
        default: Date.now(),
    }
});


const Apartment = mongoose.model('apartment', apartmentSchema);

module.exports = Apartment;