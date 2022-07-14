import React, { Component } from "react";
import "./App.css";
import Error from "./Pages/Error";
import Prelaunch from "./Pages/Prelaunch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Prelaunch />
      </div>
    );
  }
}

export default App;
