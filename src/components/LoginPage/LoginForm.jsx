import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function LoginForm() {
	const [user, setUser] = useState({
		name: "",
		password: "",
	});

	const ctx = useUserContext();

	//   const [loginStatus, setLoginStatus] = useState(false);
	const [err, setErr] = useState([]);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const headers = { "Content-Type": "application/json" };

		axios
			.post("/users/login", user, headers)
			.then((response) => {
				if (response.status === 200) {
					if (response.data.token) {
						// console.log("user is logged in");
						localStorage.setItem("isLogin", true);
						const userString = JSON.stringify(response.data.user);
						localStorage.setItem("user", userString);
						localStorage.setItem("token", response.data.token);
						ctx.setUser(response.data.user);
						navigate("/");
						return ;
					}
					alert(`${response.data.errors[0]}`);
				}
			})
			.catch((err) => {
				console.log(err.response);
				if (err.response.data.errors) {
					setErr(err.response.data.errors);
				}
			});
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label htmlFor="email">EMAIL</label>
			<input
				type="text"
				name="email"
				value={user.email}
				onChange={handleChange}
			/>

			<label htmlFor="password">PASSWORD</label>
			<input
				type="password"
				name="password"
				value={user.password}
				onChange={handleChange}
			/>

			<p>Forgot your password ?</p>

			<ul>
				{err?.map((e) => (
					<li>{e}</li>
				))}
			</ul>

			<input type="submit" value="Log in" className="submit-login" />
		</form>
	);
}
