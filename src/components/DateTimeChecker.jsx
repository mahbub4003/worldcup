"use client";

import { useAmp } from "next/amp";
import { useState } from "react";

export default function DateTimeChecker() {
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const [desiredFormat, setdesiredFormat] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    // Parse the original format
    const dat = new Date(date);
    setDay(dat.getDay());

    // Desired format
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    //set Date and Time in useState variable
    setdesiredFormat(dat.toLocaleString("en-US", options));
  };
  const bar = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="birthdaytime">Birthday (date and time):</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
        ></input>
        <input type="submit" value="Submit" />
      </form>
      <h1>
        Time:-{">"} {bar[day]} {desiredFormat}
        {" (Local Time)"}
      </h1>
    </div>
  );
}
