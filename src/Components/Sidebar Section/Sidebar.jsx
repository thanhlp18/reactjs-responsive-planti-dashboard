import React from "react";
import PropTypes from "prop-types";
import "./sidebar.css";

// Import images ->
import logo from "../../Assets/logo.png";

//Import icons ->
import { BsSpeedometer2, BsTrophy, BsQuestionCircle } from "react-icons/bs";
import {
  MdOutlineDeliveryDining,
  MdOutlineExplore,
  MdOutlinePieChartOutline,
  MdTrendingUp,
  MdContacts,
  MdCreditCard,
} from "react-icons/md";

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsSpeedometer2 className="icon" />
              <span className="smallText">Dash Board</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePieChartOutline className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdContacts className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdCreditCard className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Planti, please contact us from for more questions.
          </p>
          <p>
            <button className="btn">Go to help center</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
