const express = require('express');
const router = express.Router();
const Tenant = require('../models/tenantModel');
const bcrypt = require('bcryptjs');
const Apartment = require('../models/apartmentModel');


router.post('/', async (req,res) =>{

    // remember to add input verification here
    
    
    let apartment = new Apartment({
        address: req.body.address,
        unit: req.body.unit,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
    });

    apartment = await apartment.save();

        
        
    let tenant = new Tenant({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        _apartment: apartment._id,
        });

    tenant = await tenant.save();

    apartment._tenant = tenant._id;

    apartment = await apartment.update();

    res.send(apartment);
});

module.exports = router;
