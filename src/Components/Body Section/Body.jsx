import React from "react";
import PropTypes from "prop-types";
import "./body.css";
import Top from "./Top Section/Top";
import Listing from "./Listing Section/Listing";
import Activity from "./Activity Section/Activity";

Body.propTypes = {};

function Body(props) {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
}

export default Body;
