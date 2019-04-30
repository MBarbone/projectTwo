const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const payments = require('./routes/payments');
const db = require('./db/connection');
const services = require('./routes/services');
const apartment = require('./routes/apartment');

// Trying .env file
// var google = new Google(keys.google);
// require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/payment', payments);
app.use('/api/service', services);
app.use('/api/apartment', apartment);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  