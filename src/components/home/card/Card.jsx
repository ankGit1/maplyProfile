import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ info }) {
  const { name, lname, interest, about, image, location, cords } = info;
  return (
    <div className="p-2">
      <div className="card_topDiv">
        <div className="sideImg"></div>
        <div className="mainCard">
          <img src={image} alt="img" />
          <span>{interest}</span>
          <div className="userInfoDiv">
            <h3 className="fw-bold">{`${name} ${lname}`}</h3>
            <p className="userDesc">{about}</p>
            <div className="card_links">
              <Link to="/home/map" state={cords}>
                <i className="fa-solid fa-location-dot fa-sm smallSpace"></i>
                {location}
              </Link>
              <Link to="/home/profile" state={info}>
                See More..
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
