const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    _apartmentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});


const Tenant = mongoose.model('tenant', tenantSchema);

module.exports = Tenant;
