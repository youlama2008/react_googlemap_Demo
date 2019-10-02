var MapInstance = require("../models/map").model;

// Task index
exports.index = (req, res) => res.send("This is task index");

// List all users
exports.fetch_all = (req, res) => {
  MapInstance.find({}, (err, items) => res.json({ locations: items }));
};
