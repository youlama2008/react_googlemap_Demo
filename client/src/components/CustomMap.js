import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./CustomMap.css";
import PropTypes from "prop-types";

const mapStyles = {
  position: "relative",
  minHeight: "500px"
};

const API_KEY = "apikey";

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
      <Marker
        name="Hamburg"
        position={{ lat: 53.5510846, lng: 9.9936819 }}
        title="The marker`s title will appear as a tooltip."
      />

      <Marker name="Berlin" position={{ lat: 52.520006, lng: 13.404954 }} />
    </Map>
  );
};

CustomMap.propTypes = {
  loaded: PropTypes.bool,
  google: PropTypes.object
};

export default GoogleApiWrapper({
  apiKey: API_KEY
})(CustomMap);
