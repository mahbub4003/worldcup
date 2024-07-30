import BallersThisMatch from "@/components/BallersThisMatch";
import AllBatters from "@/components/Batters";
import FirstBattingInnings from "@/components/FirstBattingInnings";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/playingProfile");
  const data = await res.json();
  return data;
};

export default async function page({ params }) {
  const players = await getData();

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <div>
        <div>
          <h2 className="underline">Scorcut....</h2>
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
        </div>
        <BallersThisMatch />
      </div>
      <div>
        <span className="font-bold">Wait to bat..</span>
        <br />
        <span>Mushfiqur Rohim, Mahmudullah, Liton, </span>
      </div>
    </div>
  );
}
