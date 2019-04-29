const mongoose = require('mongoose');



  
const tenantSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    isAdmin: {Boolean, default: false },
    created_at: ??
    updated_at: ??
});

const buildingSchema = new mongoose.Schema ({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    created_at: ??
    updated_at: ??
});

const paymentSchema = new mongoose.Schema ({
    amount: Number,
    date: ???,
    details: String,
    created_at:
    updated_at:
});

const requestSchema = new mongoose.Schema ({
    requestType: String,
    details: String,
    created_at:
    updated_at:
});



const Tenant = mongoose.model('tenant', tenantSchema);

async function createTenant(){
    const tenant = new Tenant({
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@gmail.com',
        isAdmin: 'false',
        created_at: ??
        updated_at: ??
    })

    const result = await tenant.save();
};

createTenant();