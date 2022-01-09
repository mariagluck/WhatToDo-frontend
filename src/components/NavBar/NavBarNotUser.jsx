import React from "react";
import { Link } from "react-router-dom";
import {
//   FaSignInAlt,
  FaRegEdit,
  FaUser,
//   FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import "./NavBarUser.scss";

export default function NavBarNotUser() {
  return (
    <div className="nav">
      <Link to="/login" className="link-navbar">
        <button className="btn-navbar"> LIST AN EVENT </button>
      </Link>

      <Link to={"/login"}>
        <FaRegEdit className="create-event-mobile-icon" />
      </Link>

      <Link to="/login" className="link-navbar">
        <button className="btn-navbar"> LOG IN!</button>
      </Link>

      <Link to={"/login"}>
        <FaUser className="login-icon" />
      </Link>

      <Link to={"/login"}>
        <FaRegHeart className="heart-icon" />
      </Link>
      
    </div>
  );
}
