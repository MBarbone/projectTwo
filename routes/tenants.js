const express = require('express');
const router = express.Router();
const Tenant = require('../models/tenantModel');
const bcrypt = require('bcryptjs');



router.post('/', async (req,res) =>{


    // remember to add input verification here

    const tenant = await Tenant.findOne({email: req.body.email});


    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    tenant.password = hash;
  
  await tenant.update();



    res.send(tenant);
});


module.exports = router;
