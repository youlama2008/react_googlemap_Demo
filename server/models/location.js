const mongoose = require('./../db.js');
const validator = require('validator');


const Schema = mongoose.Schema;
// create Schema
const LocationSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      return validator.isAlpha(value);
    }
  },
  geoLocation: {
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