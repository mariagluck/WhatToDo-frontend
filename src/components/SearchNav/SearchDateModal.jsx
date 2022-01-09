import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "./DropdownDate.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchDateModal.scss";

export default function SearchDateModal({ show, close, setDate }) {
	const [datepicker, setDatepicker] = useState(new Date().setHours(0, 0, 0, 0));
    const [buttonText, setButtonText] = useState("SUBMIT DATE");
	const handleChange = (date) => {
		  setDatepicker(date);
		  setDate(date); // setDate is set twice: in handleChange function AND on clicking on submit --> maybe this is leading to strange things?
		// close();
	};

     
	console.log("event date ", datepicker);

	return (
		<>
			{show ? (
				<div className="date-modalContainer" onClick={() => close()}>
					<div className="date-modal" onClick={(e) => e.stopPropagation()}>
						<header className="date-modal_header">
							<h2 className="date-modal-header-title">Choose a date</h2>
							<button className="date-modal-close" onClick={() => close()}>
								<FaTimes />
							</button>
						</header>
						<button 
                            className="submit-date" 
                            // onClick={() =>  setDate(datepicker)}>
							// SUBMIT
                            onClick={() => {
                            setButtonText("DONE!");
                            setTimeout(() => {
                              setButtonText("SUBMIT DATE");
                            }, 2000);
                          }}
                        >
                          {buttonText}
						</button>
						<main>
							<DatePicker selected={datepicker} onChange={handleChange} />
						</main>
					</div>
				</div>
			) : null}
		</>
	);
}
