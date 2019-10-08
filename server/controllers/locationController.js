var LocationInstance = require("../models/location").model;
var { getAddress } = require("../utils/getAddress");

// Task index
exports.index = (req, res) => res.send("welcome to location routes");

// List all locations
exports.fetch_all = (req, res) => {
  LocationInstance.find({}, (err, items) =>
    res.json({
      locations: items
    })
  );
};

// List a location with its address
exports.fetch_one = (req, res) => {
  LocationInstance.findOne({
    address: req.params.address
  })
    .then(data => {
      if (!data) {
        return res.status(400).json("no data");
      }
      return res.json(data);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
};

// udpate a location by its address
exports.update = async (req, res) => {
  let location = {};
  if (req.body.address) {
    let locationObjs = await getAddress(req.body.address);
    let locationObj = locationObjs[0];
    if (locationObj && JSON.stringify(locationObj) !== "{}") {
      location.address = locationObj["formatted_address"].split(",")[0].toLowerCase();
      location.geolocation = `${locationObj.geometry.location.lat}, ${locationObj.geometry.location.lng}`;
    }
  }

  LocationInstance.findOneAndUpdate(
    {
      address: req.params.address
    },
    {
      $set: location
    }
  )
    .then(data => {
      if (!data) {
        return res.status(400).json("The address does not exsit");
      }
      res.json(data);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
};

// delete a location by its address
exports.delete = (req, res) => {
  LocationInstance.findOneAndDelete({
    address: req.body.address.toLowerCase()
  })
    .then(data => {
      if (!data) {
        return res.status(400).json("The address does not exsit");
      }
      data.save().then(data => {
        res.json(data);
      });
    })
    .catch(err => {
      return res.status(404).json(err);
    });
};

// add one location
exports.add = async (req, res) => {
  let location = {};
  if (req.body.address) {
    let locationObjs = await getAddress(req.body.address);
    let locationObj = locationObjs[0];

    if (locationObj && JSON.stringify(locationObj) !== "{}") {
      console.log(locationObj);
      location.address = locationObj["formatted_address"]
        .split(",")[0]
        .toLowerCase();

      LocationInstance.findOne({
        address: location.address
      })
        .then(data => {
          if (data) {
            return res.status(409).json("This address already exsits");
          } else {
            location.geolocation = `${locationObj.geometry.location.lat}, ${locationObj.geometry.location.lng}`;

            LocationInstance(location)
              .save()
              .then(data => {
                res.json(data);
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          return res.status(404).json(err);
        });
    } else {
      return res.status(400).json("It is not a German address");
    }
  } else {
    return res.status(400).json("Please enter a German address");
  }
};
