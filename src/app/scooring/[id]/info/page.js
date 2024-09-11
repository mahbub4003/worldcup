import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page({ params }) {
  const schedules = await getData();
  const schedule = schedules.data.filter((sdl) => sdl.id == params.id);
  const { teamNameVs, vsTeamName, tossWinTeam, chooseTo, matchNo } =
    schedule[0];

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <Link href={`/add/addPlayersIndevisualGam/${params.id}`}>
        Add Players
      </Link>
      <div>
        <div>
          <h2 className="underline font-bold">**Information....</h2>
          <div className="w-[100%] text-center">
            <h1 className="underline">
              {teamNameVs} <span className="text-red-500">VS</span> {vsTeamName}
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
