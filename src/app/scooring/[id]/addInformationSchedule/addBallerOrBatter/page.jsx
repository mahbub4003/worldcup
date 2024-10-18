"use client";

import { useEffect, useState } from "react";
import {
  getSchedule,
  postData,
  getPlayingProfile,
} from "./addBallerOrBatterUtility";

export default function Toss({ params }) {
  const [activeTeamId, setActiveTeamId] = useState(null);
  const [playersInfoForSingaleInings, setPlayersInfoForSingaleInings] =
    useState("");
  const [activePlayerId, setActivePlayerId] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(false);
  const [strickerror, setStrickerror] = useState(false);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(null);
  const [onStricke, setOnStricke] = useState("false");
  const [innings, setInnings] = useState("singleSchedule?.batSecondTeamId");

  useEffect(
    () => async () => {
      const schedule = await getSchedule();
      setSchedule(schedule);
      const playersInfoForSingaleInings = await getPlayingProfile();
      setPlayersInfoForSingaleInings(playersInfoForSingaleInings.data);
    },
    [activeTeamId, update, innings]
  );

  const singleSchedule =
    schedule && schedule.data?.filter((sdl) => sdl.id == params.id)[0];

  const stringInnings =
    singleSchedule && JSON.stringify(singleSchedule?.batFirstTeamId);

  const playersListForSingaleTeam =
    playersInfoForSingaleInings &&
    playersInfoForSingaleInings
      .filter((plr) => plr.scheduleId === params.id)
      .filter((plr) => plr.teamId == activeTeamId);

  let filteredPlayersListForSingaleTeam;
  if (
    activeTeamId == singleSchedule?.batFirstTeamId &&
    innings == stringInnings
  ) {
    filteredPlayersListForSingaleTeam =
      playersListForSingaleTeam &&
      playersListForSingaleTeam?.filter((plr) => plr.batting != true);
  } else if (
    activeTeamId == singleSchedule?.batFirstTeamId &&
    innings != stringInnings
  ) {
    filteredPlayersListForSingaleTeam =
      playersListForSingaleTeam && playersListForSingaleTeam;
  } else if (
    activeTeamId == singleSchedule?.batSecondTeamId &&
    innings == stringInnings
  ) {
    filteredPlayersListForSingaleTeam =
      playersListForSingaleTeam && playersListForSingaleTeam;
  } else if (
    activeTeamId == singleSchedule?.batSecondTeamId &&
    innings != stringInnings
  ) {
    filteredPlayersListForSingaleTeam =
      playersListForSingaleTeam &&
      playersListForSingaleTeam?.filter((plr) => plr.batting != true);
  }

  const filteredPlayer =
    filteredPlayersListForSingaleTeam &&
    filteredPlayersListForSingaleTeam?.filter(
      (plr) => plr.playerId == activePlayerId
    )[0];

  const battersOnCrease =
    playersInfoForSingaleInings &&
    playersInfoForSingaleInings
      .filter((plr) => plr.scheduleId === params.id)
      .filter((plr) => plr.teamId == innings)
      .filter((plr) => plr.onCrease == true);

  const battersOnStricke =
    playersInfoForSingaleInings &&
    playersInfoForSingaleInings
      .filter((plr) => plr.scheduleId === params.id)
      .filter((plr) => plr.teamId == innings)
      .filter((plr) => plr.onStricke == true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      activeTeamId == singleSchedule?.batFirstTeamId &&
      innings == stringInnings
    ) {
      if (battersOnCrease.length == 2) {
        setError(true);
      } else {
        if (battersOnStricke.length == 1) {
          setStrickerror(true);
          setSuccess(false);
        } else {
          postData({
            data: JSON.stringify({
              batting: true,
              onCrease: true,
              onStricke: JSON.parse(onStricke),
            }),
            id: filteredPlayer?.id,
          });
          setStrickerror(false);
        }
        setError(false);
      }
    } else if (
      activeTeamId == singleSchedule?.batSecondTeamId &&
      innings != stringInnings
    ) {
      if (battersOnCrease.length == 2) {
        setError(true);
      } else {
        if (battersOnStricke.length == 1) {
          setStrickerror(true);
          setSuccess(false);
        } else {
          postData({
            data: JSON.stringify({
              batting: true,
              onCrease: true,
              onStricke: JSON.parse(onStricke),
            }),
            id: filteredPlayer?.id,
          });
          setStrickerror(false);
        }
        setError(false);
      }
    } else if (
      activeTeamId == singleSchedule?.batSecondTeamId &&
      innings == stringInnings
    ) {
      postData({
        data: JSON.stringify({
          balling: true,
        }),
        id: filteredPlayer?.id,
      });
      setError(false);
      setStrickerror(false);
      setSuccess(true);
    } else if (
      activeTeamId == singleSchedule?.batFirstTeamId &&
      innings != stringInnings
    ) {
      postData({
        data: JSON.stringify({
          balling: true,
        }),
        id: filteredPlayer?.id,
      });
      setError(false);
      setStrickerror(false);
      setSuccess(true);
    }
    setUpdate(filteredPlayer?.id);
  };

  let buttonValue;
  if (activeTeamId == singleSchedule?.batFirstTeamId) {
    buttonValue = "Add Batter";
  } else if (activeTeamId == singleSchedule?.batSecondTeamId) {
    buttonValue = "Add Baller";
  } else if (activeTeamId == null) {
    buttonValue = "";
  }

  let playersContent;
  if (
    singleSchedule?.batFirstTeamId == activeTeamId &&
    JSON.stringify(singleSchedule?.batFirstTeamId) == innings
  ) {
    playersContent = (
      <div className="mb-2">
        <label className="block"> On Strike**</label>

        <select
          className="m-1 w-[80%] rounded p-1"
          value={onStricke}
          onChange={(e) => setOnStricke(e.target.value)}
          required
        >
          <option value={false}>No Stricke</option>;
          <option value={true}>Stricke</option>;
        </select>
      </div>
    );
  } else if (
    singleSchedule?.batSecondTeamId == activeTeamId &&
    JSON.stringify(singleSchedule?.batSecondTeamId) == innings
  ) {
    playersContent = (
      <div className="mb-2">
        <label className="block"> On Strike**</label>

        <select
          className="m-1 w-[80%] rounded p-1"
          value={onStricke}
          onChange={(e) => setOnStricke(e.target.value)}
          required
        >
          <option value={false}>No Stricke</option>;
          <option value={true}>Stricke</option>;
        </select>
      </div>
    );
  }

  console.log(innings, activeTeamId, singleSchedule?.batSecondTeamId);

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h1 className=" text-xl text-center font-bold text-green-700">
        Add Batter Or Baller
      </h1>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="mb-2">
          <label className="block"> Innings**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={innings}
            onChange={(e) => setInnings(e.target.value)}
            required
          >
            {" "}
            <option value={""}>Choose one</option>;
            <option value={singleSchedule?.batFirstTeamId}>
              First Innings
            </option>
            ;
            <option value={singleSchedule?.batSecondTeamId}>
              Second Innings
            </option>
            ;
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Add Baller Or Batter**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={activeTeamId}
            onChange={(e) => setActiveTeamId(e.target.value)}
            required
          >
            <option value={""}>Choose one</option>;
            <option
              value={
                innings == stringInnings
                  ? singleSchedule?.batFirstTeamId
                  : singleSchedule?.batSecondTeamId
              }
            >
              Batter
            </option>
            <option
              value={
                innings == stringInnings
                  ? singleSchedule?.batSecondTeamId
                  : singleSchedule?.batFirstTeamId
              }
            >
              Baller
            </option>
            ;
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Select Player Name**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={activePlayerId}
            onChange={(e) => setActivePlayerId(e.target.value)}
            required
          >
            <option value={""}>Choose one</option>
            {filteredPlayersListForSingaleTeam &&
              filteredPlayersListForSingaleTeam?.map((plr) => {
                return (
                  <option key={plr.id} value={plr.playerId}>
                    {plr.playerName}
                  </option>
                );
              })}
          </select>
        </div>

        {
          /* {singleSchedule?.batFirstTeamId == activeTeamId && (
          <div className="mb-2">
            <label className="block"> On Strike**</label>

            <select
              className="m-1 w-[80%] rounded p-1"
              value={onStricke}
              onChange={(e) => setOnStricke(e.target.value)}
              required
            >
              <option value={false}>No Stricke</option>;
              <option value={true}>Stricke</option>;
            </select>
          </div>
        )} */

          playersContent
        }

        <div className="w-[20%] m-auto">
          {buttonValue && (
            <input
              className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
              type="submit"
              value={buttonValue}
            />
          )}
        </div>
      </form>
      {success && <p className="text-green-500">Success*****</p>}
      {error && (
        <p className="text-red-500">Already Tow Batter On the Crease*****</p>
      )}

      {strickerror && (
        <p className="text-red-500">Already One Batter On Stricke*****</p>
      )}
    </div>
  );
}
