const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema ({
    requestType: String,
    details: String,
    _apartmentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});


const Service = mongoose.model('service', serviceSchema);

module.exports = Service;
