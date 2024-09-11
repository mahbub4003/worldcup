"use client";

import { useEffect, useState } from "react";
import { postData, getTeam, getSeries } from "./addScheduleUtility";

export default function AddTeam({ header }) {
  const [allTeamsName, setAllTeamsName] = useState("");
  const [shirisName, setshirisName] = useState("");
  const [allSeries, setAllSeries] = useState("");
  const [teamNameVs, setTeamNameVs] = useState("");
  const [vsTeamName, setvsTeamName] = useState("");
  const [venue, setVenue] = useState("");
  const [toss, setToss] = useState(false);
  const [matchNo, setMatchNo] = useState(0);
  const [tossWinTeam, setTossWinTeam] = useState("");
  const [chooseTo, setChooseTo] = useState("");
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const [vsTeamNameError, setVsTeamNameError] = useState(false);

  useEffect(
    () => async () => {
      const team = await getTeam();
      setAllTeamsName(team);
      const serieses = await getSeries();
      setAllSeries(serieses);
    },
    []
  );
  console.log(date);
  const no = parseInt(matchNo);
  const submitHandler = (e) => {
    e.preventDefault();

    // Parse the original format
    const dat = new Date(date);
    // setDate(dat.getDay());

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
    // setdesiredFormat(dat.toLocaleString("en-US", options));

    if (teamNameVs == vsTeamName) {
      setVsTeamNameError(true);
    } else {
      postData(
        JSON.stringify({
          teamNameVs,
          vsTeamName,
          venue,
          toss,
          matchNo,
          tossWinTeam,
          chooseTo,
          matchNo: no,
          date,
          shirisName,
        })
      );
      setTeamNameVs("");
      setvsTeamName("");
      setVenue("");
    }
  };

  const vsTeamOnChangeHandler = (e) => {
    setvsTeamName(e.target.value);
  };
  const error =
    teamNameVs == vsTeamName ? (
      <p className="text-red-500">
        Team Name VS Team Name Is Same** Please choose another Team..
      </p>
    ) : (
      ""
    );

  return (
    <div>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="mb-2">
          <label className="block"> Select Series Name**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={shirisName}
            onChange={(e) => setshirisName(e.target.value)}
            required
          >
            <option value={""}>Choose Team Name</option>;
            {allSeries.data?.map((series) => {
              return (
                <option key={series.id} value={series.name}>
                  {series.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-2">
          <label className="block"> Select Team Name**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={teamNameVs}
            onChange={(e) => setTeamNameVs(e.target.value)}
            required
          >
            <option value={""}>Choose Team Name</option>;
            {allTeamsName.data?.map((team) => {
              return (
                <option key={team.id} value={team.teamName}>
                  {team.teamName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <label className="block">Vs Team Name</label>
          <select
            className="m-1 w-[80%] rounded p-1"
            value={vsTeamName}
            onChange={vsTeamOnChangeHandler}
            required
          >
            <option value={""}>Choose Team Name</option>;
            {allTeamsName.data?.map((team) => {
              return (
                <option key={team.id} value={team.teamName}>
                  {team.teamName}
                </option>
              );
            })}
          </select>
          {error}
        </div>
        <div className="">
          <label className="block">Venue</label>
          <input
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            type="text"
            placeholder="Input Nenue Name"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>{" "}
        <div className="">
          <label className="block">Match NO</label>
          <input
            value={matchNo}
            onChange={(e) => setMatchNo(e.target.value)}
            type="number"
            placeholder="Input Schedule no"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>
        <div className="">
          <label className="block">Add Schedule Time</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
            placeholder="Add Schedule Time"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>
        {vsTeamNameError && (
          <p className="text-red-500">
            No success! Team Name VS Team Name Is Same** Please choose another
            Team..
          </p>
        )}
        <div className="w-[20%] m-auto">
          <input
            className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
            type="submit"
            value={"Add Team"}
          />
        </div>
      </form>
    </div>
  );
}
