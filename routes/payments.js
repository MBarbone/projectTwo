const express = require('express');

const router = express.Router();

router.post('/api/payment', async (req,res)=>{
    const paymentAmount = req.body.amount;
    const apartmentId = req.body.apartmentId;
    const userId = req.body.userId;

    // create/import this module "Payment" later
    const payment = new Payment({
        amount: paymentAmount,
        apartmentid: apartmentId,
        userId: userId
    });

    // remember to add input verification here

    // save to database
    const payment = await Payment.save();
    res.send(payment);
});


router.get('/api/payment', async (req,res) =>{
    // SELECT * FROM PAYMENTS WEHRE ? = comes from models
    // get all payment history for this user


    // variable payment history which i will write in model
    res.send()
});

