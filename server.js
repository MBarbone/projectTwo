const express = require('express');
const path = require('path');

// Trying .env file
// var google = new Google(keys.google);
// require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

const viewsDirectoryPath = path.join(__dirname, './public/');

app.use(express.static(viewsDirectoryPath));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  