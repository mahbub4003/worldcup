import BallersThisMatch from "@/components/BallersThisMatch";
import AllBatters from "@/components/Batters";
import { getData, getSchedule, getTeam } from "../../scooringUtility";

export default async function page({ params }) {
  // store all players data in players constant..
  const players = await getData();

  // store all schedule data in players constant..and filter by id and params id
  const schedules = await getSchedule();
  const schedule = schedules.data?.filter((sdl) => sdl.id == params.id)[0];
  const { toss, tossWinTeam, chooseTo, batFirst, ballFirst, innings } =
    schedule;

  // filter batFirst team players data by schedule id and batFirse team id....
  const filteredBattingFirstPlayers = players.data
    .filter((player) => player.scheduleId == params.id)
    .filter((player) => player.teamId == schedule?.batFirstTeamId);

  // search batter team name and baller team name dynamically
  const findBatterTeamName = innings === "first" ? batFirst : ballFirst;
  const findBallerTeam = innings === "first" ? ballFirst : batFirst;

  // store all team data in allTeam constant....
  const allTeam = await getTeam();

  // search batter and baller team name...dynamically....
  const batterTeam = allTeam.data?.filter(
    (team) => team.teamName == findBatterTeamName
  )[0];

  const ballFirstTeam = allTeam.data?.filter(
    (team) => team.teamName == findBallerTeam
  )[0];

  // search batter team id and baller team id dynamically...
  const batters = innings == "first" ? batterTeam.id : ballFirstTeam.id;
  const ballers = innings == "first" ? ballFirstTeam.id : batterTeam.id;

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h2 className="text-purple-500 text-3xl font-bold underline text-center">
        Scorcut....
      </h2>
      <br></br>
      <h1 className="text-green-500 text-2xl font-bold underline">
        {schedule.batFirst}
      </h1>
      <table className="w-[100%] text-center">
        <tbody>
          <tr className="border-collapse border border-slate-900">
            <th className="p-2 sm:p-3">Name</th>
            <th></th>
            <th className="p-1 sm:p-3">Run</th>
            <th className="p-1 sm:p-3">ball</th>
            <th className="p-1 sm:p-3">4s</th>
            <th className="p-1 sm:p-3">6s</th>
            <th className="p-1 sm:p-3">Strike Rate</th>
          </tr>
          {/* filter batting first team players by batting first team id and batting = true & displayed by mapping */}
          {filteredBattingFirstPlayers
            .filter((player) => player.teamId == schedule?.batFirstTeamId)
            .filter((plr) => plr.batting == true)
            .map((player) => {
              return (
                <AllBatters
                  key={player.id}
                  player={player}
                  scheduleId={params}
                />
              );
            })}
        </tbody>
      </table>
      <div>
        <span className="font-bold">Wait to bat..</span>
        <br />
        <span>
          {filteredBattingFirstPlayers
            .filter((player) => player.teamId == schedule?.batFirstTeamId)
            .filter((plr) => plr.batting == false)
            .map((plr) => (
              <span key={plr.id}>{plr.playerName},</span>
            ))}
        </span>
      </div>
      <br></br>

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
            {schedule?.toss &&
              players?.data
                .filter((player) => player.scheduleId == params.id)
                .filter((player) => player.teamId == ballers)
                .filter((plr) => plr.balling == true)
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

      <br></br>
      <h1 className="text-green-500 text-2xl font-bold underline">
        {schedule.ballFirst}
      </h1>
      <table className="w-[100%] text-center">
        <tbody>
          <tr className="border-collapse border border-slate-900">
            <th className="p-2 sm:p-3">Name</th>
            <th></th>
            <th className="p-1 sm:p-3">Run</th>
            <th className="p-1 sm:p-3">ball</th>
            <th className="p-1 sm:p-3">4s</th>
            <th className="p-1 sm:p-3">6s</th>
            <th className="p-1 sm:p-3">Strike Rate</th>
          </tr>

          {players.data
            .filter((player) => player.scheduleId == params.id)
            .filter((player) => player.teamId == schedule?.batSecondTeamId)
            .map((player) => {
              return (
                <AllBatters
                  key={player.id}
                  player={player}
                  scheduleId={params}
                />
              );
            })}
        </tbody>
      </table>
      <div>
        <span className="font-bold">Wait to bat..</span>
        <br />
        <span>
          {filteredBattingFirstPlayers
            .filter((player) => player.teamId == schedule?.batSecondTeamId)
            .filter((plr) => plr.batting == false)
            .map((plr) => (
              <span key={plr.id}>{plr.playerName},</span>
            ))}
        </span>
      </div>
      <br></br>
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
            {schedule?.toss &&
              players?.data
                .filter((player) => player.scheduleId == params.id)
                .filter((player) => player.teamId == batters)
                .filter((plr) => plr.balling == true)
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
      {/* <BallersThisMatch /> */}
    </div>
  );
}
