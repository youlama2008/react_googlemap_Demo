var LocationInstance = require("../models/location").model;
var { getLocation, filterData } = require("../utils/utils");

// Task index
exports.index = (req, res) => res.send("welcome to location routes");

// List all locations
exports.fetch_all = (req, res) => {
  LocationInstance.find({}, (err, items) => {
    let filteredItems = items.map(item => {
      return filterData(item);
    });
    return res.json(filteredItems);
  });
};

// List a location with its address
exports.fetch_one = (req, res) => {
  LocationInstance.findOne({
    address: req.params.address
  })
    .then(data => {
      if (!data) {
        return res.status(404).json("This address does not exist");
      }
      let filteredData = filterData(data);
      return res.json(filteredData);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
};

// udpate a location by its address
exports.update = async (req, res) => {
  let location = await getLocation(req);

  if (JSON.stringify(location) == "{}") {
    return res.status(400).json("invalid German address to update");
  } else {
    LocationInstance.findOneAndUpdate(
      {
        address: req.params.address
      },
      {
        $set: location
      }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).json("The address does not exist");
        }
        res.json(location);
      })
      .catch(err => {
        return res.status(404).json(err);
      });
  }
};

// delete a location by its address
exports.delete = (req, res) => {
  LocationInstance.findOneAndDelete({
    address: req.params.address.replace(/^\S/, s => s.toUpperCase())
  })
    .then(data => {
      if (!data) {
        return res.status(400).json("The address does not exist");
      }
      data.save().then(() => {
        let msg = `${req.params.address} is deleted successfully`;
        res.json(msg);
      });
    })
    .catch(err => {
      return res.status(404).json(err);
    });
};

// add one location
exports.add = async (req, res) => {
  if (req.body.address) {
    let location = await getLocation(req);

    if (JSON.stringify(location) !== "{}") {
      LocationInstance.findOne({
        address: location.address
      })
        .then(data => {
          if (data) {
            return res.status(409).json("This address already exists");
          } else {
            LocationInstance(location)
              .save()
              .then(data => {
                let filteredData = filterData(data);
                return res.json(filteredData);
              })
              .catch(err => {
                return res.status(404).json(err);
              });
          }
        })
        .catch(err => {
          return res.status(404).json(err);
        });
    } else {
      return res.status(400).json("Please enter a valid German address");
    }
  } else {
    return res.status(400).json("Please enter a German address");
  }
};
