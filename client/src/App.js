import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./containers/MapContainer";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>React Demo: Google Map</p>
      <MapContainer />
    </div>
  );
}

export default App;
