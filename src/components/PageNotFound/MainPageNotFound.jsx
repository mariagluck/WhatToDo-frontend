import React from "react";
import { Link } from "react-router-dom";
import "./MainPageNotFound.scss";
import sorry from "../../images/mariasorry.gif";
import { FaRegFrown } from "react-icons/fa";

export default function MainPageNotFound() {
  return (
    <div className="main-page-not-found">
      <h1 className="title-desktop">
        PAGE NOT FOUND <FaRegFrown />
      </h1>
      <h2>Hmm that page doesn't exist...</h2>
      <img src={sorry} alt="maria-carie-sorry" />
      <p>
        Maybe the link has expired or has been removed. Please go back to search
        or homepage.
      </p>
      <p>To report a broken link please contact us!</p>
      <Link style={{ textDecoration: 'none' }} to={"/"}>
        <button className="what-to-do-button">WHAT TO DO</button>
      </Link>
    </div>
  );
}
