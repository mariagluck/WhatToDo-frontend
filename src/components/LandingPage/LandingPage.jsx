import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";
import Card from "../Card/Card";
import "./LandingPage.scss";
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";

export default function LandingPage() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [direction, setDirection] = useState();
	const [category, setCategory] = useState(null);
	const [date, setDate] = useState();
	const [keyword, setKeyword] = useState(null);

	useEffect(() => {
		fetchEvents();
		setLoading(false);
	}, []);

	const fetchEvents = () => {
		axios
			.get("/events/today")
			.then((res) => {
				// console.log(res.data);
				setEvents(res.data);
			})
			.catch((err) => {
				console.log("Error while fetching events in 1st render: ", err);
			});
	};

	const getSearchResults = (category, date, keyword) => {
		axios({
			url: "/events/search",
			method: "POST",
			data: { category, date, keyword },
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((res) => {
				const searchResult = res.data;
				setEvents(searchResult);
			})
			.catch((err) => {
				console.log(
					"Error while fetching events based on search navbar: ",
					err
				);
			});
	};

	if (loading) {
		return "Loading...";
	}

	// console.log(events);

	return (
		<div className="search-nav">
			<div className="top">
				<Header />
				<SearchNav
					events={events}
					setEvents={setEvents}
					category={category}
					setCategory={setCategory}
					date={date}
					setDate={setDate}
					keyword={keyword}
					setKeyword={setKeyword}
					getSearchResults={getSearchResults}
				/>
			</div>
			<div className="search-results">
				<h2>WHAT TO DO ...TODAY?</h2>
				{/* <h2>WHAT TO DO ...${date}?</h2> */}
				<button onClick={() => setDirection(false)} className="display-single">
					<FaThList />
				</button>
				<button onClick={() => setDirection(true)} className="display-grid">
					<FaThLarge />
				</button>
			</div>
			<main className={direction && "one-per-row"}>
				{events?.map((event, index) => (
					<Card key={event._id} event={event} index={index} />
				))}
			</main>
			<Footer />
		</div>
	);
}
