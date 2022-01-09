import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/what toDo.png";
import "./CreateListingNavBar.scss";
import {FaHome} from "react-icons/fa";

export default function CreateListingNavBar() {
    return (
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo WhatToDo" />
            </Link>
            
          </div>
          <Link to="/">
                <p className="back-btn"> 
                  <FaHome className="home-icon"/> 
                  <span className="home-link">WHAT TO DO...?</span> 
                </p>
            </Link>
    </div>
    );
}