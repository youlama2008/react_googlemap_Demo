var LocationInstance = require("../models/location").model;

// Task index
exports.index = (req, res) => res.send("welcome to location routes");

// List all locations
exports.fetch_all = (req, res) => {
  LocationInstance.find({}, (err, items) => res.json({
    locations: items
  }));
};

// List a location with its id
exports.fetch_one = (req, res) => {
  LocationInstance.findOne({
    _id: req.params.id
  }).then(data => {
    if (!data) {
      return res.status(400).json("no data")
    }
    return res.json(data)
  }).catch(err => {
    return res.status(404).json(err)
  })
};

// udpate a location by its id
exports.update = (req, res) => {
  let location = {};
  if (req.body.address) {
    location.address = req.body.address;
  }
  if (req.body.geolocation) {
    location.geolocation = req.body.geolocation;
  }

  LocationInstance.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $set: location
    }, {
      new: true
    })
    .then(data => {
      if (!data) {
        return res.status(400).json("data does not exsit");
      }
      res.json(data);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
}

// delete a location by its id
exports.delete = (req, res) => {
  LocationInstance.findByIdAndRemove({
    _id: req.params.id
  }).then(data => {
    if (!data) {
      return res.status(400).json("data does not exsit")
    }
    data.save().then(data => {
      res.json(data)
    })
  }).catch(err => {
    return res.status(404).json(err)
  });
};

// add one location
exports.add = (req, res) => {
  let location = {};
  if (req.body.address) {
    location.address = req.body.address;
  }
  if (req.body.geolocation) {
    location.geolocation = req.body.geolocation;
  }

  LocationInstance(location).save().then(data => {
    res.json(data);
  });
};