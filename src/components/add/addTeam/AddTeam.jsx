"use client";

import { useEffect, useState } from "react";
import postData from "./addTeamUtility";

export default function AddTeam({ header }) {
  const [teamName, setTeamName] = useState("");
  const [totalPlayed, setTotalPlayed] = useState(0);
  const [win, setwin] = useState(0);
  const [loss, setloss] = useState(0);
  const [achiveRun, setachiveRun] = useState(0);
  const [givingRun, setgivingRun] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(header);
    postData(
      JSON.stringify({
        teamName,
        totalPlayed,
        win,
        loss,
        achiveRun,
        givingRun,
      })
    );
    setTeamName("");
    setTotalPlayed(0);
    setachiveRun(0);
    setgivingRun(0);
    setloss(0);
    setwin(0);
  };

  return (
    <div>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="">
          <label className="block">Team Name*</label>
          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
            type="text"
            placeholder="Input Team Name"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
        <div className="">
          <label className="block">Total Played</label>
          <input
            value={totalPlayed}
            onChange={(e) => setTotalPlayed(e.target.value)}
            type="number"
            placeholder="Input Total Played"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
        <div className="">
          <label className="block">Total Win</label>
          <input
            value={win}
            onChange={(e) => setwin(e.target.value)}
            type="number"
            placeholder="Input Total Win"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
        <div className="">
          <label className="block">Total Loss</label>
          <input
            value={loss}
            onChange={(e) => setloss(e.target.value)}
            type="number"
            placeholder="Input Total Loss"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
        <div className="">
          <label className="block">Total Achive Run</label>
          <input
            value={achiveRun}
            onChange={(e) => setachiveRun(e.target.value)}
            type="number"
            placeholder="Input Total Achive Run"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
        <div className="">
          <label className="block">Total Giving Run</label>
          <input
            value={givingRun}
            onChange={(e) => setgivingRun(e.target.value)}
            type="number"
            placeholder="Input Total Giving Run"
            className="m-1 w-[80%] rounded p-1"
          />
        </div>
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
