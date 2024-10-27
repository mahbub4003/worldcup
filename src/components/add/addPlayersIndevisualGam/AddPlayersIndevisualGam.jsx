"use client";

import { useEffect, useState } from "react";
import {
  addPlayersIndevisualGameInfo,
  getschedule,
  getPlayers,
  getTeams,
  getPlayersIndevisualGameInfo,
} from "./addPlayersIndevisualUtility";

export default function AddPlayersIndevisualGame({ id }) {
  const [playerName, setplayerName] = useState("");
  const [allPlayersData, setAllPlayersData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [scheduleId, setScheduleId] = useState(id);
  const [teamId, setTeamId] = useState(0);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [playerAddError, setPlayerAddError] = useState(false);
  const [playerAddSuccess, setPlayerAddSuccess] = useState(false);

  // Below Hooks  initialy 0 run m/b........
  const [four, setFoue] = useState(0);
  const [six, setSix] = useState(0);

  useEffect(
    () => async () => {
      const scheduleData = await getschedule();

      // // filter schedule******
      const filteredSingleSchedule = scheduleData.data?.filter(
        (sdl) => sdl.id == id
      );
      setFilteredSchedule(filteredSingleSchedule);

      // //get Team List*****
      const teamList = await getTeams();
      setTeams(teamList);

      // // get players List
      const players = await getPlayers();
      setAllPlayersData(players);

      const getPlayersIndevisualGameInfoData =
        await getPlayersIndevisualGameInfo();
      setGamePlayers(getPlayersIndevisualGameInfoData.data);
    },
    [playerName, id]
  );

  // // single team name start from here***

  const singleteam = (teamName) => {
    return teams.data?.filter((tm) => tm.teamName == teamName);
  };

  const teamVs = singleteam(filteredSchedule[0]?.teamNameVs);
  const vsTeam = singleteam(filteredSchedule[0]?.vsTeamName);

  // // single team name end from here***

  // // filter players name start from here***
  const fiteredPlayer = allPlayersData?.data?.filter(
    (player) => player.teamId == teamId
  );

  // // filter players name end from here***
  // // filter players id start from here***

  const platersId = fiteredPlayer?.filter(
    (player) => player.name == playerName
  )[0];

  // // filter players id end from here***
  const filteredTeamId = gamePlayers
    ?.filter((plr) => plr.scheduleId == id)
    .filter((plr2) => plr2.playerId == platersId?.id);
  //submit Handler start here****
  const submitHandler = (e) => {
    e.preventDefault();

    if (filteredTeamId.length > 0) {
      setPlayerAddError(true);
      setPlayerAddSuccess(false);
      setplayerName("");
    } else {
      addPlayersIndevisualGameInfo(
        JSON.stringify({
          playerName,
          teamId,
          scheduleId: id,
          playerId: platersId && platersId.id,
          four,
          six,
        })
      );
      setplayerName("");
      setPlayerAddError(false);
      setPlayerAddSuccess(true);
    }
  };
  console.log(filteredTeamId.length);

  return (
    <div>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="">
          <label className="block">Input Schedule ID**</label>
          <input
            value={scheduleId}
            onChange={(e) => setScheduleId(e.target.value)}
            type="text"
            placeholder="Input Schedule ID"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>

        <div className="">
          <label className="block">Input Team Name**</label>
          <select
            className="m-1 w-[80%] rounded p-1"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
            required
          >
            {" "}
            <option value={""}>Choose Team Name</option>;
            <option value={teamVs && teamVs[0].id}>
              {teamVs && teamVs[0].teamName}
            </option>
            ;
            <option value={vsTeam && vsTeam[0].id}>
              {vsTeam && vsTeam[0].teamName}
            </option>
            ;
          </select>
        </div>
        <div className="">
          <label className="block">Input Player Name**</label>
          <select
            className="m-1 w-[80%] rounded p-1"
            value={playerName}
            onChange={(e) => setplayerName(e.target.value)}
            required
          >
            {" "}
            <option value={""}>Choose Team Name</option>;
            {fiteredPlayer?.map((player) => {
              return (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="">
          <label className="block">Input Player ID**</label>
          <input
            value={platersId && platersId.id}
            type="number"
            placeholder="Input player ID"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>

        <div className="w-[20%] m-auto">
          <input
            className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
            type="submit"
            value={"Add Player"}
          />
        </div>
        {playerAddError && (
          <p className="text-red-600">This Player allready exist</p>
        )}
        {playerAddSuccess && (
          <p className="text-green-600">This Player add success</p>
        )}
      </form>
    </div>
  );
}
