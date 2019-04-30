const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    _apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartment",
        required: true,
        unique: true
    }
});


const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
