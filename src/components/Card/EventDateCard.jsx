import React from "react";
import moment from "moment";

export default function EventDateCard({event}) {
  const { start_date, end_date } = event;
  
  const startMoment = moment(start_date);
  const startDate = startMoment.format("D MMM");
  const endMoment = moment(end_date);
  
  if (startMoment.isSame(endMoment, "day") && startMoment.isSame(endMoment, "month")) { 
        return <p className="event-date column">{startDate}</p>;
    } else if (startMoment.isSame(endMoment, "month")) {  
        return ( <p className="event-date column">{startMoment.format("D ")} {endMoment.format(" - D MMM")}</p>);
  } return (<p className="event-date column"> {startMoment.format("D MMM")} {endMoment.format(" - D MMM")}</p>);
};
