import React from "react";
import Link from "next/link";

export default function Schedules({ schedule }) {
  const {
    id,
    teamNameVs,
    vsTeamName,
    venue,
    toss,
    tossWinTeam,
    chooseTo,
    matchNo,
    shirisName,
    date,
  } = schedule;

  const d = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
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
    <div className=" md:w-[32%] w-[30%] m-1 bg-slate-300 md:p-5 p-1 border-solid border-2 border-white ">
      <Link href={`/scooring/${id}`}>
        <div className="md:flex mb-5 bg-gray-400 md:p-2 rounded">
          <div className="md:basis-1/2">
            <p>Match No: {matchNo}</p>
          </div>
          <div className="md:basis-1/2 md:text-base text-xs">{shirisName}</div>
        </div>
        <div className="text-xl">{teamNameVs}</div>
        <div className="text-xl">{vsTeamName}</div>
        <div className="text-sm mt-5">
          <div className="text-sm mt-5">
            {d.toLocaleString("en-US", options)}
            {"   "}
            {bar[d.getDay()]}
            {/* {d} */}
          </div>
          <div className="text-sm mt-5">Venue: {venue}</div>
        </div>
      </Link>
    </div>
  );
}
