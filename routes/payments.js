const express = require('express');
const router = express.Router();
const Payment = require('../models/paymentModel');

router.post('/', async (req,res)=>{    
    // remember to add input verification here
    const payment = new Payment({amount: req.body.amount} );

    const data = await payment.save();

    res.send("got here");

});


router.get('/', async (req,res) =>{
    const data = Payment.find({})
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });

    res.send(data);
});

module.exports = router;

