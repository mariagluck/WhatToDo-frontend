import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarNotUser from "./NavBarNotUser";
import NavBarUser from "./NavBarUser";
import SearchModalMobile from "../SearchNav/SearchModalMobile";
import "./NavBar.scss";
import logo from "../../images/what toDo.png";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal); //to open mobile search modal
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo WhatToDo" />
        </Link>
      </div>

      <div className="nav-wrapper">
        <button className="search-mobile" onClick={() => toggle()}>
          <FaSearch className="mobile-search-icon" />
        </button>
        <SearchModalMobile
          show={modal}
          title="WHAT TO DO TODAY...?"
          close={toggle}
        />

        {isLogin ? <NavBarUser /> : <NavBarNotUser />}

      </div>

    </div>
  );
}
