import React from "react";
import PropTypes from "prop-types";
import "./listing.css";

// Import icon
import { MdArrowForward } from "react-icons/md";
import { BsHeartFill, BsHeart } from "react-icons/bs";

// Import media
import img1 from "../../../Assets/image (1).png";
import img2 from "../../../Assets/image (3).png";
import img3 from "../../../Assets/image (4).png";
import img4 from "../../../Assets/image (5).png";
import user1 from "../../../Assets/user (1).png";
import user2 from "../../../Assets/user (2).png";
import user3 from "../../../Assets/user (4).jpg";
import user4 from "../../../Assets/user (4).png";

Listing.propTypes = {};

function Listing(props) {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <MdArrowForward className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <BsHeartFill className="icon" />
          <img src={img1} alt="Image name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <BsHeart className="icon" />
          <img src={img2} alt="Image name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <BsHeartFill className="icon" />
          <img src={img3} alt="Image name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <BsHeart className="icon" />
          <img src={img4} alt="Image name" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <MdArrowForward className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <MdArrowForward className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                54.556 Plant sold <br />
                <small>
                  27 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
