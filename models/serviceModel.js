const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema ({
    requestType: String,
    details: String,
    _apartment: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Apartment"
    },
    _tenant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tenant'
    }
});


const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
