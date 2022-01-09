import React, { useEffect, useState } from "react";
import SearchDateModal from "./SearchDateModal";
import "./DropdownDate.scss";

export default function DropdownDate({ date, setDate }) {
	const [dateModal, setDateModal] = useState(false);
	const toggle = () => setDateModal(!dateModal);

	useEffect(() => {
		// console.log("Date is ", date);
		if (date === "custom") {
			setDateModal(true);
		}
	}, [date]);

	return (
		<div className="select">
			<select
				className="standard-select"
				value={date}
				onChange={(e) => setDate(e.target.value)}
			>
				<option className="option-date" value="Anytime">
					Anytime
				</option>
				<option className="option-date" value="Today">
					Today
				</option>
				<option className="option-date" value="Tomorrow">
					Tomorrow
				</option>
				<option className="option-date" value="This weekend">
					This weekend
				</option>
				<option className="option-date clickDate" value="custom">
					Choose a date
				</option>
			</select>
			<SearchDateModal show={dateModal} close={toggle} setDate={setDate} />
		</div>
	);
}
