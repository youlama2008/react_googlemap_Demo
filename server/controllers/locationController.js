var LocationInstance = require("../models/map").model;

// Task index
exports.index = (req, res) => res.send("This is task index");

// List all locations
exports.fetch_all = (req, res) => {
  LocationInstance.find({}, (err, items) => res.json({ locations: items }));
};
