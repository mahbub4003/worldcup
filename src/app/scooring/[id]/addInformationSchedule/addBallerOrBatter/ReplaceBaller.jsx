"use client";

import { useEffect, useState } from "react";
import { getPlayingProfile } from "./addBallerOrBatterUtility";
import {
  editPlayerInfo,
  editPlayerInfoTheMatch,
} from "@/app/scooring/addRunBall/addRunBallUtility";
import { useRouter } from "next/navigation";

export default function ReplaceBaller({ ballerTheMatch }) {
  const [status, setStatus] = useState(false);
  const [players, setPlayers] = useState([]);
  const [newBallerId, setNewBallerId] = useState("");
  const router = useRouter();

  useEffect(
    () => async () => {
      const players = getPlayingProfile();
      setPlayers(players?.data);
    },
    [newBallerId]
  );

  const { id } = ballerTheMatch.filter((plr) => plr.onBalling == true)[0] || [];

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus(false);
    if (ballerTheMatch.length > 0 && newBallerId != "") {
      editPlayerInfoTheMatch({
        data: JSON.stringify({
          onBalling: false,
        }),
        id,
      });
      editPlayerInfoTheMatch({
        data: JSON.stringify({
          onBalling: true,
          balling: true,
        }),
        id: newBallerId,
      });
      setNewBallerId("");
    } else if (ballerTheMatch.length == 0 && newBallerId != "") {
      editPlayerInfoTheMatch({
        data: JSON.stringify({
          onBalling: true,
          balling: true,
        }),
        id: newBallerId,
      });
      setNewBallerId("");
    }
    router.refresh();
  };
  const buttonHandler = () => {
    setNewBallerId("");
    setStatus(true);
  };

  return (
    <div>
      {!status && (
        <button className="bg-green-400 p-2" onClick={buttonHandler}>
          Replace Baller
        </button>
      )}
      {status && (
        <form className="w=[80%] sm:ml-6" onSubmit={submitHandler}>
          <div className="">
            <label className="block">Replace Baller**</label>
            <select
              value={newBallerId}
              onChange={(e) => setNewBallerId(e.target.value)}
              className="m-1 w-[80%] rounded p-1"
              required
            >
              <option>Choose One</option>
              {ballerTheMatch
                .filter((plr) => plr.onBalling != true)
                .map((plr) => (
                  <option value={plr.id}>{plr.playerName}</option>
                ))}
            </select>
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
