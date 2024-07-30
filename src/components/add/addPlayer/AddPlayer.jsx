"use client";

import { useEffect, useState } from "react";
import { addPlayerInfo, getTeam } from "./addPlayerUtility";

export default function AddPlayer() {
  const [playersName, setPlayersName] = useState("");
  const [allTeamsName, setAllTeamsName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [battingStyle, setBattingStyle] = useState("");
  const [ballingStyle, setBallingStyle] = useState("");
  const [roll, setRoll] = useState("");
  // Below Hooks  initialy 0 run m/b........
  const [totalRun, setTotalRun] = useState(0);
  const [totalUseBall, setTotalUseBall] = useState(0);
  const [hRun, setHRun] = useState(0);
  const [totalBaliing, SETtotalBaliing] = useState(0);
  const [totalWicket, setTotalWicket] = useState(0);
  const [economy, seteconomy] = useState(0);
  const [evarage, setevarage] = useState(0);
  const [bbi, setbbi] = useState("0/0");

  useEffect(
    () => async () => {
      const team = await getTeam();
      setAllTeamsName(team);
    },
    []
  );

  const submitHandler = (e) => {
    e.preventDefault();

    addPlayerInfo(
      JSON.stringify({
        name: playersName,
        teamId: teamName,
        battingStyle,
        ballingStyle,
        roll,
        totalRun,
        totalUseBall,
        hRun,
        totalBaliing,
        totalWicket,
        economy,
        evarage,
        bbi,
      })
    );
    setPlayersName("");
  };

  return (
    <div>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="">
          <label className="block">Input Player&lsquo;s Name**</label>
          <input
            value={playersName}
            onChange={(e) => setPlayersName(e.target.value)}
            type="text"
            placeholder="Input Players Name"
            className="m-1 w-[80%] rounded p-1"
            required
          />
        </div>

        <div className="mb-2">
          <label className="block"> Select Team Name**</label>

          <select
            className="m-1 w-[80%] rounded p-1"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          >
            {" "}
            <option value={""}>Choose Team Name</option>;
            {allTeamsName.data?.map((team) => {
              return (
                <option key={team.id} value={team.id}>
                  {team.teamName}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Batting Style**</label>
          <select
            required
            className="m-1 w-[80%] rounded p-1"
            value={battingStyle}
            onChange={(e) => setBattingStyle(e.target.value)}
          >
            <option value={""}>Choose Batting Style</option>;
            <option value={"Right Hand"}>Right Hand</option>;
            <option value={"Left Hand"}>Left Hand</option>;
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Balling Style**</label>
          <select
            required
            className="m-1 w-[80%] rounded p-1"
            value={ballingStyle}
            onChange={(e) => setBallingStyle(e.target.value)}
          >
            <option value={""}>Choose Balling Style</option>;
            <option value={"Right Hand peacer"}>Right Hand peacer</option>;
            <option value={"Left Hand peacer"}>Left Hand peacer</option>;
            <option value={"Right Hand fist mediam"}>
              Right Hand fist mediam
            </option>
            ;
            <option value={"Left Hand fist mediam"}>
              Left Hand fist mediam
            </option>
            ;<option value={"Right Hand Leg Spin"}>Right Hand Leg Spin</option>;
            <option value={"Left Hand Leg Spin"}>Left Hand Leg Spin</option>;
            <option value={"Right Hand Off Breck"}>Right Hand Off Breck</option>
            ;<option value={"Left Hand Off Breck"}>Left Hand Off Breck</option>;
          </select>
        </div>

        <div className="mb-2">
          <label className="block"> Main Roll**</label>
          <select
            required
            className="m-1 w-[80%] rounded p-1"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          >
            <option value={""}>Choose Player&lsquo;s Roll</option>;
            <option value={"Bats Man"}>Bats Man</option>;
            <option value={"Wicket Kepper Bats Man"}>
              Wicket Kepper Bats Man
            </option>
            ;<option value={"Batting All Rounder"}>Batting All Rounder</option>
            <option value={"Balling All Rounder"}>Balling All Rounder</option>;
            <option value={"Baller"}>Baller</option>;
          </select>
        </div>
        <div className="w-[20%] m-auto">
          <input
            className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
            type="submit"
            value={"Add Player"}
          />
        </div>
      </form>
    </div>
  );
}
