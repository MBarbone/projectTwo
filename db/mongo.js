CREATE DATABASE MasterKey_db;

USE MasterKey_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first VARCHAR(30),
    last VARCHAR(30),
    email VARCHAR(45),
    admin BOOLEAN DEFAULT FALSE,
    created_at DATETIME,
    updated_at DATETIME
);

CREATE TABLE Building (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    address TEXT(100),
    city VARCHAR(75),
    state VARCHAR(50),
    zip INT(10),
    created_at DATETIME,
    updated_at DATETIME
);

CREATE TABLE Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount INT(6),
    date DATETIME,
    details Text(100),
    created_at DATETIME,
    updated_at DATETIME,
    user_id INT(5) FOREIGN KEY,
    building_id INT(5) FOREIGN KEY
)

CREATE TABLE Requests(
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50),
    created_at DATETIME,
    updated_at DATETIME,
    details VARCHAR(100),
    user_id INT(5) FOREIGN KEY,
    building_id INT(5) FOREIGN KEY,
)






// timestamp? new date? date.now()?
// how do we related between payments/services & building
// boolean admin default model

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


    
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