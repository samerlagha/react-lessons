import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ location, offset }) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = moment(date)
    .utcOffset(offset)
    .format("h:mm:ss A");

  return (
    <div className="clock">
      <span className="clock__location">{location}</span>
      <span className="clock__time">{time}</span>
    </div>
  );
};

export default Clock;