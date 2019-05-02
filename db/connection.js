const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"));
mongoose.set("useCreateIndex", true);
