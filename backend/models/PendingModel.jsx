const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const PendingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: String,
    required: false,
    unique: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
    min: 18,
  },
  address: {
    type: String,
    required: false,
  },
  balance: {
    type: Number,
    required: false,
    default: 500,
  },
  photo: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

const PendingModel = mongoose.model("Pending", PendingSchema);

module.exports = PendingModel;
