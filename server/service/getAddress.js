
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
