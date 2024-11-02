"use client";

import { useEffect, useState } from "react";
import { getSchedule, postData } from "./addTossUtility";

export default function Toss({ params }) {
  const [tossWinTeam, setTossWinTeam] = useState("");
  const [tossLossTeam, setTossLossTeam] = useState("");
  const [chooseTo, setChooseTo] = useState("");
  const [ballFirst, setBallFirst] = useState("");
  const [batFirst, setBatFirst] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // store all schedule data in schedule constant and setSchedule useState in useEffect hook
  useEffect(
    () => async () => {
      const schedule = await getSchedule();
      setSchedule(schedule);
    },
    [chooseTo, tossLossTeam, tossWinTeam]
  );

  // filter schedule by schdule id and params id...targeted schedule..
  const singleSchedule =
    schedule && schedule.data?.filter((sdl) => sdl.id == params.id)[0];

  // search batter team and baller team conditionally...start from here..
  let bat;
  let ball;

  if (tossWinTeam == singleSchedule?.teamNameVs && chooseTo == "Filding") {
    ball = singleSchedule?.teamNameVs;
    bat = singleSchedule?.vsTeamName;
  } else if (
    tossWinTeam == singleSchedule?.vsTeamName &&
    chooseTo == "Filding"
  ) {
    bat = singleSchedule?.teamNameVs;
    ball = singleSchedule?.vsTeamName;
  } else if (tossLossTeam == singleSchedule?.teamNameVs && chooseTo == "Bat") {
    bat = singleSchedule?.vsTeamName;
    ball = singleSchedule?.teamNameVs;
  } else if (tossLossTeam == singleSchedule?.vsTeamName && chooseTo == "Bat") {
    bat = singleSchedule?.teamNameVs;
    ball = singleSchedule?.vsTeamName;
  }

  // search batter team and baller team conditionally...end here..

  //form submit handler bellow....

  const submitHandler = (e) => {
    e.preventDefault();
    if ((ballFirst == batFirst) & (ballFirst != "")) {
      setError(true);
      setSuccess(false);
    } else {
      postData({
        data: JSON.stringify({
          toss: true,
          tossWinTeam,
          chooseTo,
          ballFirst: ball,
          batFirst: bat,
        }),
        id: params.id,
      });
      setError(false);
      setSuccess(true);
    }
  };

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="mb-2">
          <label className="block"> Select toss win team**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={tossWinTeam}
            onChange={(e) => setTossWinTeam(e.target.value)}
            required
          >
            <option value={""}>Choose Team Name</option>;
            {schedule &&
              schedule.data
                ?.filter((sdl) => sdl.id == params.id)
                .map((schedule) => {
                  return (
                    <option key={schedule.id} value={schedule.teamNameVs}>
                      {schedule.teamNameVs}
                    </option>
                  );
                })}
            {schedule &&
              schedule.data
                ?.filter((sdl) => sdl.id == params.id)
                .map((schedule) => {
                  return (
                    <option key={schedule.id} value={schedule.vsTeamName}>
                      {schedule.vsTeamName}
                    </option>
                  );
                })}
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Select toss Loss team**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={tossLossTeam}
            onChange={(e) => setTossLossTeam(e.target.value)}
            required
          >
            <option value={""}>Choose Team Name</option>;
            {schedule &&
              schedule.data
                ?.filter((sdl) => sdl.id == params.id)
                .map((schedule) => {
                  return (
                    <option key={schedule.id} value={schedule.teamNameVs}>
                      {schedule.teamNameVs}
                    </option>
                  );
                })}
            {schedule &&
              schedule.data
                ?.filter((sdl) => sdl.id == params.id)
                .map((schedule) => {
                  return (
                    <option key={schedule.id} value={schedule.vsTeamName}>
                      {schedule.vsTeamName}
                    </option>
                  );
                })}
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Choose To**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={chooseTo}
            onChange={(e) => setChooseTo(e.target.value)}
            required
          >
            <option value={""}>Choose to</option>;
            <option value={"Bat"}>Bat First</option>;
            <option value={"Filding"}>Ball First</option>;
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Select First bat team**</label>
          <input className="m-1 w-[80%] rounded p-1" type="text" value={bat} />
        </div>

        <div className="mb-2">
          <label className="block"> Select First Ball team**</label>
          <input className="m-1 w-[80%] rounded p-1" type="text" value={ball} />

          {error && <p>First Ball Team and First Bat same is not alow</p>}
        </div>

        <div className="w-[20%] m-auto">
          <input
            className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
            type="submit"
            value={"Add Team"}
          />
        </div>
      </form>
      {success && <p className="text-green-500">Success*****</p>}
    </div>
  );
}
