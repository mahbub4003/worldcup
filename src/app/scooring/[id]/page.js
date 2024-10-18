import BallersThisMatch from "@/components/BallersThisMatch";
import BattingOnCrease from "@/components/Batters";
import Link from "next/link";
import { getData, getSchedule, getTeam } from "../scooringUtility";

export default async function page({ params }) {
  const players = await getData();
  const schedules = await getSchedule();
  const schedule = schedules.data?.filter((schdl) => schdl.id == params.id)[0];
  const { toss, tossWinTeam, chooseTo, batFirst, ballFirst, innings } =
    schedule;
  const findBatterTeamName = innings === "first" ? batFirst : ballFirst;
  const findBallerTeam = innings === "first" ? ballFirst : batFirst;
  const allTeam = await getTeam();
  const batterTeam = allTeam.data?.filter(
    (team) => team.teamName == findBatterTeamName
  )[0];

  const ballFirstTeam = allTeam.data?.filter(
    (team) => team.teamName == findBallerTeam
  )[0];

  const batters = innings == "first" ? batterTeam.id : ballFirstTeam.id;
  const ballers = innings == "first" ? ballFirstTeam.id : batterTeam.id;
  console.log(ballers, batters);

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <div className="flex">
        <div className="flex-1 font-bold">
          Ban: 120 <span>(12.5)</span>
        </div>
        <div>
          <table className="text-center flex-1">
            <tbody>
              <tr className="border-collapse ">
                <td className="pr-5">Current Run Rete</td>
                <td className="p">Requared Run Rete</td>
              </tr>

              <tr className="border-collapse ">
                <td className="pt-2 ">35</td>
                <td className="pt-2 ">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {toss && (
        <p className="underline">
          {innings == "first" &&
            `***${tossWinTeam} Won the toss and desided to ${chooseTo}`}
        </p>
      )}
      <div>
        <h2 className="underline">Batting....</h2>
        <table className="w-[100%] text-center">
          <tbody>
            <tr className="border-collapse border border-slate-900">
              <th className="p-2 sm:p-3">Name</th>
              <th></th>
              <th className="p-2 sm:p-3">Run</th>
              <th className="p-2 sm:p-3">ball</th>
              <th className="p-2 sm:p-3">4s</th>
              <th className="p-2 sm:p-3">6s</th>
              <th className="p-1 sm:p-3">Strike Rate</th>
            </tr>

            {toss &&
              players?.data
                .filter((player) => player.scheduleId == params.id)
                .filter((player) => player.teamId == batters)
                .filter((plr) => plr.onCrease == true)
                .map((player) => {
                  return (
                    <BattingOnCrease
                      key={player.id}
                      player={player}
                      scheduleId={params}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>

      <hr />
      <div>
        <div className="text-gray-600 font-bold">Ballers...</div>
        <table className="w-[100%] text-center">
          <tbody>
            <tr className="border-collapse border border-slate-900">
              <th className="p-2 sm:p-3">Name</th>
              <th></th>
              <th className="p-1 sm:p-3">Overs</th>
              <th className="p-1 sm:p-3">Runs</th>
              <th className="p-1 sm:p-3">Wickets</th>
              <th className="p-1 sm:p-3">Economy</th>
            </tr>
            {toss &&
              players?.data
                .filter((player) => player.scheduleId == params.id)
                .filter((player) => player.teamId == ballers)
                .filter((plr) => plr.onBalling == true)
                .map((player) => {
                  return (
                    <BallersThisMatch
                      key={player.id}
                      player={player}
                      scheduleId={params}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
