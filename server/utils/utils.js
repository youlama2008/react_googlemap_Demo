const KEY = "API_KEY";
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
    location.address = req.body.address.replace(/^\S/, s => s.toUpperCase());
    location.geolocation = `${locationObj.geometry.location.lat}, ${locationObj.geometry.location.lng}`;
  }
  return location;
};

exports.filterData = data => {
  let { address, geolocation } = data; 
  return {
    address,	
    geolocation	
  };
};