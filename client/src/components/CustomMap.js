import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./CustomMap.css";
import PropTypes from "prop-types";

const mapStyles = {
  position: "relative",
  minHeight: "500px"
};

const API_KEY = "API_KEY";

const CustomMap = (props) => {
  if (!props.loaded) return <div>Loading...</div>;

  return (
    <Map
      google={props.google}
      className="custom-map"
      style={mapStyles}
      initialCenter={{ lat: 51.0, lng: 10.0 }}
      zoom={6}
    >
      {props.locations.length > 0 &&
        props.locations.map((item) => {
          let name = item.address;
          let geoLocation = item.geolocation.split(",");
          let position = { lat: geoLocation[0], lng: geoLocation[1] };
          return <Marker key={name} name={name} position={position} />;
        })}
    </Map>
  );
};

CustomMap.propTypes = {
  loaded: PropTypes.bool,
  google: PropTypes.object,
  locations: PropTypes.array
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(CustomMap);
