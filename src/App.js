import React from "react";
import "./app.css";
import PropTypes from "prop-types";
import Sidebar from "./Components/Sidebar Section/Sidebar";
import Body from "./Components/Body Section/Body";

App.propTypes = {};

function App(props) {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
