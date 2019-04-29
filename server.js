const express = require('express');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const paymentsRoutes = require('./routes/payments');
const servicesRoutes = require('./routes/services');

// Trying .env file
// var google = new Google(keys.google);
// require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('api/payments', paymentsRoutes);
app.use('api/services', servicesRoutes);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  