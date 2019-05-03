const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const Joi = require("joi");
const Apartment = require("./apartmentModel");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isManager: {
    type: Boolean,
    default: false
  },
  unit: String,
  _apartment: {
    ref: "Apartment",
    type: mongoose.Schema.Types.ObjectId,
    db: "MasterKey",
    required: false
  }
});

userSchema.methods.generateAuthToken = async function() {
  let apartment = await Apartment.findOne({ _id: this._apartment });

  const token = jwt.sign(
    { _id: this._id, isManager: this.isManager, apartment: apartment },
    process.env.JWT_SECRET
  );
  return token;
};

const User = mongoose.model("User", userSchema);

// function validateUser(user) {
//   const schema = {
//     name: Joi.string()
//       .min(5)
//       .max(50)
//       .required(),
//     email: Joi.string()
//       .min(5)
//       .max(255)
//       .required()
//       .email(),
//     password: Joi.string()
//       .min(5)
//       .max(255)
//       .required()
//   };

//   return Joi.validate(user, schema);
// }

module.exports = User;
// exports.validate = validateUser;
