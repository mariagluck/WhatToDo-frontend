import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Event from "./components/EventPage/Event";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateListingPage from "./components/CreateListingPage/CreateListingPage";
import WishList from "./components/WishList/WishList";
import "./App.css";
import { useUserContext } from "./context/UserContext";

function App() {
	const { user, setUser } = useUserContext();


	useEffect(() => {
		const userLocal = localStorage.getItem("user");
		if (userLocal && !user) {
			const userData = JSON.parse(userLocal);
			setUser(userData);
		}
	});

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" caseSensitive={false} element={<LandingPage />} />
					<Route path="/event/:id" caseSensitive={false} element={<Event />} />
					<Route path="*" caseSensitive={false} element={<PageNotFound />} />
					<Route
						path="/register"
						caseSensitive={false}
						element={<RegistrationPage />}
					/>
					<Route path="/login" caseSensitive={false} element={<LoginPage />} />
					<Route path="/wishlist" caseSensitive={false} element={<WishList />} />
					<Route
						path="/create-listing"
						caseSensitive={false}
						element={<CreateListingPage />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
