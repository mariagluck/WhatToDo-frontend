import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/what toDo.png";


export default function RegNavBar() {
    return (
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo WhatToDo" />
            </Link>
          </div>
    </div>
    );
}