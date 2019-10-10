import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomEditor from "./components/CustomEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Demo: Input, Button & Debounce</p>
        <CustomEditor />
      </header>
    </div>
  );
}

export default App;
