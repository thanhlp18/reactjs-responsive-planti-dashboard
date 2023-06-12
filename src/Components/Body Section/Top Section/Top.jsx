import React from "react";
import PropTypes from "prop-types";
import "./top.css";

// Import icons
import { MdSearch, MdNotificationsNone, MdArrowForward } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";

// Import media
import img from "../../../Assets/user (3).png";
import img2 from "../../../Assets/image (2).png";
import video from "../../../Assets/video.mp4";
import { BsQuestionCircle } from "react-icons/bs";

Top.propTypes = {};

function Top(props) {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Wellcome to Pranti.</h1>
          <p>Hello IsraTect, Wellcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <MdSearch className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="leftCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="rightCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>132 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <MdArrowForward className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Having trouble in Planti, please contact us from for more
                  questions.
                </p>
                <p>
                  <button className="btn">Go to help center</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
