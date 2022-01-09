import React from "react";
import moment from "moment";

export default function EventDateSinglepage({ eventData }) {
	const { start_date, end_date } = eventData;

	const startMoment = moment(start_date);
	const startDate = startMoment.format("D MMM");
	const endMoment = moment(end_date);

	if (
		startMoment.isSame(endMoment, "day") &&
		startMoment.isSame(endMoment, "month")
	) {
		return <p>{startDate}</p>;
	} else if (startMoment.isSame(endMoment, "month")) {
		return (
			<p>
				{startMoment.format("D ")} {endMoment.format(" - D MMM")}
			</p>
		);
	}
	return (
		<p>
			{" "}
			{startMoment.format("D MMM")} {endMoment.format(" - D MMM")}
		</p>
	);
}
