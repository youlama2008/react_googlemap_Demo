const mongoose = require('./../db.js');
const validator = require('validator');


const Schema = mongoose.Schema;
// create Schema
const LocationSchema = new Schema({
  address:{
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      return validator.isAlpha(value);
    }
  },
  geolocation: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isLatLong(value);
    }
  }
})

module.exports = {
  schema: LocationSchema,
  model: mongoose.model("Location", LocationSchema)
};