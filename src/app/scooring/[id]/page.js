import BallersThisMatch from "@/components/BallersThisMatch";
import BattingOnCrease from "@/components/Batters";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/playingProfile", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page({ params }) {
  const players = await getData();
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
      <p className="underline">***Bangladesh Won the toss and desided to Bat</p>
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

            {players?.data
              .filter((player) => player.scheduleId == params.id)
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
        <BallersThisMatch players={players} scheduleId={params} />
      </div>
    </div>
  );
}
