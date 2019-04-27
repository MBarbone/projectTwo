const express = require('express');

const router = express.Router();

router.post('api/services', [auth],async (req,res) =>{
    const serviceTitle = req.body.title;
    const serviceDescription = req.body.description;
    const userId = req.body.userId;


    // create/import this module "Payment" later
    const service = new Service({
        title: serviceTitle,
        description: serviceDescription,
        userId: userId
    });


    // remember to add input verification here

    // save to database
    const service = await Service.save();
    res.send(service);
})

router.get('api/services', async (req,res) =>{
    // SELECT * FROM SERVICES WEHRE ? = comes from models
    // get all service history for this user


    // variable service history which i will write in model
    res.send()
});


router.put('api/services/:id', async (req,res) => {
    const serviceId = req.params.id;

    // grab the id that is inserted. Error if id does not exist
    // send back full object that will be declared based on model
    res.send()
});

router.delete('api/services/:id', async (req,res) => {
    

     // grab the id that is inserted. Error if id does not exist
    // send back full object that will be declared based on model
    res.send('Service request successfully deleted.')
});