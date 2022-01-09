import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt, FaRegEdit, FaHeart } from "react-icons/fa";
import "./NavBarUser.scss";

export default function NavBarUser() {
	const navigate = useNavigate();
    
	const logoutHandler = () => {
		localStorage.clear();
		navigate("/");
	};
    
	return (
		<div className="nav">
			<Link to="/create-listing" className="link-navbar">
				<button className="btn-navbar"> LIST AN EVENT </button>
			</Link>

			<button className="btn-navbar" onClick={logoutHandler}>
				LOG OUT!
			</button>

			<Link to={"/create-listing"}>
				<FaRegEdit className="create-event-mobile-icon" />
			</Link>
           
			<FaSignOutAlt className="logout-icon" onClick={logoutHandler} />

			<Link to={"/wishlist"}>
				<FaHeart className="heart-icon" />
			</Link>
		</div>
	);
}
