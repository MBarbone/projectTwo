const express = require('express');
const router = express.Router();

router.post('/', async (req,res)=>{
    const paymentAmount = req.body.amount;
    const apartmentId = req.body.apartmentId;
    const userId = req.body.userId;

    // create/import this module "Payment" later
    

    // remember to add input verification here

    // save to database
    
});


router.get('/', async (req,res) =>{
    // SELECT * FROM PAYMENTS WEHRE ? = comes from models
    // get all payment history for this user


    // variable payment history which i will write in model
    res.send()
});

module.exports = router;

