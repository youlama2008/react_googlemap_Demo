var LocationInstance = require("../models/location").model;

// Task index
exports.index = (req, res) => res.send("welcome to location routes");

// List all locations
exports.fetch_all = (req, res) => {
  LocationInstance.find({}, (err, items) => res.json({ locations: items }));
};
