import React, { Component } from "react";
import "./App.css";
import Error from "./Pages/Error";
import Prelaunch from "./Pages/Prelaunch";
import Cart from "./Pages/Cart";
import Chechout from "./Pages/Chechout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chechout />
      </div>
    );
  }
}

export default App;
