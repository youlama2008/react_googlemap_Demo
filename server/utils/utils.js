const KEY = "AIzaSyANnZpeaU56qrJEz0jEp-Em9jVtKu8vZ-Q";
const COUNTRY = "Germany";

exports.getAddress = address => {
  const googleMapsClient = require("@google/maps").createClient({
    key: KEY,
    Promise: Promise
  });

  return (
    googleMapsClient
    .geocode({
      address: address,
      components: {
        country: COUNTRY
      }
    })
    .asPromise()
    .then(response => response.json.results)
    .catch(err => {
      console.log(err);
    })
  );
};

exports.getLocation = async req => {
  let location = {};
  let locationObjs = await this.getAddress(req.body.address);
  let locationObj = locationObjs[0];

  if (locationObj && JSON.stringify(locationObj) !== "{}") {
    location.address = locationObj["formatted_address"]
      .split(",")[0]
      .toLowerCase();
    location.geolocation = `${locationObj.geometry.location.lat}, ${locationObj.geometry.location.lng}`;
  }
  return location;
};