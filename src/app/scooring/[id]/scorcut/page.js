import BallersThisMatch from "@/components/BallersThisMatch";
import AllBatters from "@/components/Batters";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/playingProfile", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const getSchedule = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page({ params }) {
  const players = await getData();

  const schedules = await getSchedule();
  const schedule = schedules.data?.filter((sdl) => sdl.id == params.id)[0];

  const filteredBattingFirstPlayers = players.data
    .filter((player) => player.scheduleId == params.id)
    .filter((player) => player.teamId == schedule?.batFirstTeamId);

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
      <BallersThisMatch />

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
        <span>Mushfiqur Rohim, Mahmudullah, Liton, </span>
      </div>
      <br></br>
      <BallersThisMatch />
    </div>
  );
}
