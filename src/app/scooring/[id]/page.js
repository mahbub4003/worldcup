import BallersThisMatch from "@/components/BallersThisMatch";
import BattingOnCrease from "@/components/Batters";
import { getData, getSchedule, getTeam } from "../scooringUtility";
import AddRunBall from "../addRunBall/AddRunBall";
import ReplaceBaller from "./addInformationSchedule/addBallerOrBatter/ReplaceBaller";

export default async function page({ params }) {
  // store player data in players constant
  const players = await getData();

  // store schedule data in schedules constant and filter by id and params id..
  const schedules = await getSchedule();
  const schedule = schedules.data?.filter((schdl) => schdl.id == params.id)[0];
  const {
    toss,
    tossWinTeam,
    chooseTo,
    batFirst,
    ballFirst,
    batFirstTeamId,
    batSecondTeamId,
    innings,
    overFirstBallTeam,
    overSecondBallTeam,
    totalRunBatFistTeam,
    totalRunBatSecondTeam,
  } = schedule;

  // search batting team name dynamically by innings
  const findBatterTeamName = innings === "first" ? batFirst : ballFirst;

  // search batting team ID dynamically by innings
  let batterTeamId;
  if (innings === "first") {
    batterTeamId = batFirstTeamId;
  } else if (innings === "second") {
    batterTeamId = batSecondTeamId;
  }

  // search baller team ID dynamically by innings
  const ballerTeamId = innings === "first" ? batSecondTeamId : batFirstTeamId;

  // search batter onCrease, filtering by schedule Id, team Id and onCrease=true...
  const batterThisMatch = players?.data
    .filter((player) => player.scheduleId == params.id)
    .filter((player) => player.teamId == batterTeamId)
    .filter((plr) => plr.onCrease === true);

  // search baller filtering by schedule Id and team Id...
  const ballerTheMatch = players?.data
    .filter((player) => player.scheduleId == params.id)
    .filter((player) => player.teamId == ballerTeamId);

  // search total run and total ball dynamically / conditionally by innings...
  const totalRun =
    innings == "first" ? totalRunBatFistTeam : totalRunBatSecondTeam;
  const totalBall = innings == "first" ? overFirstBallTeam : overSecondBallTeam;

  return (
    <div className="sm:w-[60%] w-[80%] m-auto p-4 rounded">
      <div className=" bg-slate-300 p-4 rounded">
        <div className="flex">
          {toss && (
            <div className="flex-1 font-bold">
              {`${findBatterTeamName}: ${totalRun}`}{" "}
              <span>
                ({Math.floor(totalBall / 6)}.{totalBall % 6})
              </span>
            </div>
          )}
          <div>
            <table className="text-center flex-1">
              <tbody>
                <tr className="border-collapse ">
                  <td className="pr-5">Current Run Rete</td>
                  {innings == "second" && (
                    <td className="p">Requared Run Rete</td>
                  )}
                </tr>

                <tr className="border-collapse ">
                  <td className="pt-2 ">
                    {totalRun > 0
                      ? ((totalRun / totalBall) * 6).toFixed(2)
                      : "0.00"}
                  </td>
                  {innings == "second" && (
                    <td className="pt-2 ">
                      {(
                        ((totalRunBatFistTeam - totalRunBatSecondTeam) /
                          (20 - overSecondBallTeam)) *
                        6
                      ).toFixed(2)}
                    </td>
                  )}
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
                batterThisMatch.map((player) => {
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
                ballerTheMatch
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
      <div className="sm:mr-[-20px] sm:ml-5 m-5 text-right bg-slate-300 border border-collapse">
        <ReplaceBaller ballerTheMatch={ballerTheMatch} />
      </div>
      <div className=" sm:ml-[-20px] sm:mr-5 text-left bg-slate-300 border border-collapse">
        <AddRunBall
          ballerTheMatch={ballerTheMatch}
          batterThisMatch={batterThisMatch}
          scheduleId={params.id}
        />
      </div>
    </div>
  );
}
