const mongoose = require('./../db.js');

const Schema = mongoose.Schema;
// create Schema
const LocationSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  latitude: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  longitude: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  }
})

module.exports = {
  schema: LocationSchema,
  model: mongoose.model("Location", LocationSchema)
};