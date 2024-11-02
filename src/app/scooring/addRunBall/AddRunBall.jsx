"use client";

import { useEffect, useState } from "react";
import { getPlayerInfo } from "./addRunBallUtility";
import { addRunBallCloudFunction } from "./addRunBallCloudFunction";
import { useRouter } from "next/navigation";
import { getSchedule } from "../scooringUtility";

export default function AddRunBall({
  batterThisMatch,
  ballerTheMatch,
  scheduleId,
}) {
  const [status, setStatus] = useState(false);
  const [addRun, setAddRun] = useState(0);
  const [addBall, setAddBall] = useState("");
  const [boundary, setBoundary] = useState("");
  const [playersProfile, setPlayersProfile] = useState("");
  const [scheduls, setScheduls] = useState([]);
  const [freeHit, setFreeHit] = useState(false);
  console.log(addBall);
  // use router hook
  const router = useRouter();

  // useEffect hook...
  useEffect(
    () => async () => {
      // store all players profile data in platersProfile constant, and re-set data in setPlayersProfile
      const playersProfile = await getPlayerInfo();
      setPlayersProfile(playersProfile);

      // store all schedule data in schedule constant, and re-set data in setCchedule
      const schedules = await getSchedule();
      setScheduls(schedules);
    },
    []
  );

  // filter schedule data by schedule id...
  const schedule = scheduls?.data?.filter((sdl) => sdl.id == scheduleId)[0];

  // search baller filtering by onn=Balleng=true
  const onBallingBaller = ballerTheMatch.filter(
    (plr) => plr.onBalling == true
  )[0];
  const {
    id: ballerId,
    playerId,
    ballingToday,
    considRunToday,
    freeHitBall,
  } = onBallingBaller || [];

  // search onStricker and nonStricker from batter this match by onSticke=true or false
  const onStricker = batterThisMatch.filter((plr) => plr.onStricke == true)[0];
  const nonStricker = batterThisMatch.filter((plr) => plr.onStricke != true)[0];

  // search main profie onStricker and nonStricker from batter this match by filtering by player ID
  const onStrickerMainProfile = playersProfile?.data?.filter(
    (plr) => plr.id == onStricker?.playerId
  )[0];
  const nonStrickerMainProfile = playersProfile?.data?.filter(
    (plr) => plr.id == nonStricker?.playerId
  )[0];

  // search main profie current baller from baller this match by filtering by player ID

  const bollerMainProfile = playersProfile?.data?.filter(
    (plr) => plr.id == playerId
  )[0];

  // form submit handler start from here...
  const submitHandler = (e) => {
    e.preventDefault();

    addRunBallCloudFunction({
      addBall,
      addRun,
      ballerId,
      considRunToday,
      ballingToday,
      bollerMainProfile,
      onStricker,
      onStrickerMainProfile,
      nonStricker,
      nonStrickerMainProfile,
      schedule,
      scheduleId,
      boundary,
      freeHitBall,
    });
    setStatus(false);
    if (
      addBall == "noBall" ||
      addBall == "noBallWithByRun" ||
      addBall == "noBallWithBatRun"
    ) {
      setFreeHit(true);
    } else if (freeHitBall) {
      setFreeHit(false);
    }

    setAddBall("");
    setAddRun(0);
    router.refresh();
  };
  // form submit handler end here...

  return (
    <div>
      {!status && (
        <button className="bg-green-400 p-2" onClick={(e) => setStatus(true)}>
          Add Run and Ball
        </button>
      )}
      {status && (
        <form className="w=[100%]" onSubmit={submitHandler}>
          <div className="">
            <label className="block">Add Run**</label>
            <select
              value={addRun}
              onChange={(e) => setAddRun(e.target.value)}
              className="m-1 w-[80%] rounded p-1"
              required
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </div>
          <div className="">
            <label className="block">Boundary&lsquo;s**</label>
            <select
              value={boundary}
              onChange={(e) => setBoundary(e.target.value)}
              className="m-1 w-[80%] rounded p-1"
            >
              <option value={""}>No Boundary</option>
              <option value={"four"}>Four</option>
              <option value={"six"}>Six</option>
            </select>
          </div>
          <div className="">
            <label className="block">Add Ball**</label>
            {freeHitBall ? (
              <select
                value={addBall}
                onChange={(e) => setAddBall(e.target.value)}
                className="m-1 w-[80%] rounded p-1"
                required
              >
                <option value={""}>choose One</option>
                <option value={"freeHit"}>Free Hit Ball</option>
              </select>
            ) : (
              <select
                value={addBall}
                onChange={(e) => setAddBall(e.target.value)}
                className="m-1 w-[80%] rounded p-1"
                required
              >
                <option value={""}>choose One</option>
                <option value={"rightBall"}>Right Ball</option>
                <option value={"byRunRightBall"}>By Run (Right Ball)</option>
                <option value={"wd"}>WD Ball</option>
                <option value={"wdWithBy"}>WD Ball And By Run</option>
                <option value={"noBall"}>No Ball</option>
                <option value={"noBallWithBatRun"}>
                  No Ball And Run From Bat
                </option>
                <option value={"noBallWithByRun"}>No Ball And BY Run</option>
              </select>
            )}
          </div>
          <div className="w-[20%] m-auto">
            <input
              className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
              type="submit"
              value={"Add"}
            />
          </div>
        </form>
      )}
    </div>
  );
}
