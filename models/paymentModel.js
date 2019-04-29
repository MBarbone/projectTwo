const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema ({
    amount: {
        type: Number,
        required: true
    },
    _apartmentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});


const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;