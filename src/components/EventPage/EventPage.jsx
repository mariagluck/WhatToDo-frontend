import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import moment from "moment";
import EventDateSinglepage from "./EventDateSinglepage";
import { eventDefaultImages } from "../../images/defaultImagesDB/defaultImagesDB";

import Mailto from "./Mailto";

import "./EventPage.scss";
//icons
import {
	FaCalendarAlt,
	FaMapMarkerAlt,
	FaTicketAlt,
	FaInfo,
	FaFacebookF,
	FaTwitter,
	FaInstagramSquare,
	//   FaHeart,
	FaRegHeart,
	FaAngleDown,
	FaAngleUp,
} from "react-icons/fa";

export default function EventPage(event) {
	const [eventData, setEventData] = useState([]);
	const [showMore, setShowMore] = useState(false);
	const [defaultImage, setDefaultImage] = useState(null);

	let { id } = useParams();
	//   console.log(id);

	useEffect(() => {
		axios
			.get("/events/" + id)
			.then((res) => {
				// console.log(res);
				setEventData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	//print a random default image of the array db
	useEffect(() => {
		setDefaultImage(
			eventDefaultImages[Math.floor(Math.random() * eventDefaultImages.length)]
		);
	}, []);

	const {
		address,
		booking_required,
		free_event,
		description,
		name,
		email,
		image,
		phone,
		users_attending,
		website,
		price,
		// wishlisting_users,
		category,
		// summary,
		start_date,
		end_date,
	} = eventData;

	const startDate = moment(start_date);
	const endDate = moment(end_date);

	return (
		<main id="event-main">
			<div className="event-container">
				<div className="event-image">
					<img src={image ? image : defaultImage} alt="event" />
					<p className="event-date">
						<EventDateSinglepage eventData={eventData} />
					</p>
				</div>
				<div className="event-about">
					<h2 className="event-title">{name}</h2>
					<div className="about-items">
						<h5 className="event-category">
							<span>{category}</span>
							{users_attending}
						</h5>
						<FaRegHeart />
						<h5>ATTENDING</h5>
					</div>

					<div className="event-description">
						<p className="desktop-description">{description}</p>
						<p className="mobile-description">
							{description
								? showMore
									? description
									: `${description.substring(0, 250)}`
								: null}
						</p>
						<button
							className="btn-more-less"
							onClick={() => setShowMore(!showMore)}
						>
							{showMore ? (
								<>
									Show less <FaAngleUp className="arrow" />
								</>
							) : (
								<>
									Show all <FaAngleDown className="arrow" />
								</>
							)}
						</button>
					</div>
				</div>
				<div className="event-info">
					<div className="dates">
						<div className="item-info">
							<h5>Dates and Time</h5>
							<p>From: {startDate.format("dddd, DD MMM YYYY, HH:mm")}</p>
							<p>To: {endDate.format("dddd, DD MMM YYYY, HH:mm")}</p>
						</div>

						<FaCalendarAlt />
					</div>
					<div className="location">
						<div className="item-info">
							<h5> Location</h5>
							<p>{address}</p>
							<br />
							<a href="https://www.google.com/maps/search/?api=1&query=060+Lorenza+Cove%2C+49628%0D%0A">
								Open in map
							</a>
						</div>
						<FaMapMarkerAlt />
					</div>
					<div className="price">
						<div className="item-info">
							<h5>Price and Bookings</h5>
							{free_event ? <p>FREE</p> : <p>Price: {price} €</p>}
							<br />
							{booking_required ? <p>Booking Required</p> : null}
						</div>
						<FaTicketAlt />
					</div>
					<div className="contact-i">
						<div className="item-info">
							<h5>Contact details</h5>
							{phone ? <p>phone: {phone}</p> : null}
							<br />
							{email ? (
								<Mailto
									email={email}
									subject={name}
									body="Hello!"
									className="event-email"
								>
									Email
								</Mailto>
							) : null}

							<br />
							{website ? (
								<p>
									<a href={website} className="event-website">
										visit website
									</a>
								</p>
							) : null}
							<br />
							<a href={website} className="social-media">
								<FaInstagramSquare />
							</a>
							<a href={website} className="social-media">
								<FaFacebookF />
							</a>
							<a href={website} className="social-media">
								<FaTwitter />
							</a>
						</div>
						<FaInfo />
					</div>
				</div>
				{/* <div className="event-Map">
					<p>This is the map container and here goes a map view</p>
				</div> */}
			</div>
		</main>
	);
}
