import Link from "next/link";

// get all schedule data from sever...
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// get all team data from server...
const getTeamList = async () => {
  const res = await fetch("http://localhost:3000/api/teamList", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

// get playing profile from server...
const playingProfile = async () => {
  const res = await fetch("http://localhost:3000/api/playingProfile", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page({ params }) {
  //store all schedule data in constant schedule and filter by id .... then
  const schedules = await getData();

  const schedule = schedules.data.filter((sdl) => sdl.id == params.id);
  const { teamNameVs, vsTeamName, tossWinTeam, chooseTo, matchNo } =
    schedule[0];
  const teamList = await getTeamList();
  //teamNameVsData
  const teamNameVsData = teamList.data?.filter(
    (team) => team.teamName == teamNameVs
  )[0];
  //teamNameVsData
  const vsTeamNameData = teamList.data?.filter(
    (team) => team.teamName == vsTeamName
  )[0];
  //playingProfile Data
  const playersData = await playingProfile();

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <div className="text-right mr-0">
        <Link
          className="bg-green-400 p-2 rounded hover:bg-green-700 duration-500"
          href={`/add/addPlayersIndevisualGam/${params.id}`}
        >
          Add Players
        </Link>
      </div>

      <div>
        <div>
          <h2 className="underline font-bold">**Information....</h2>
          <div className="w-[100%] text-center"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex">
            <div className="flex-1">
              <h1 className="font-bold">{teamNameVs} Players List </h1>
              {playersData.data
                .filter((p) => p.scheduleId == params.id)
                .filter((player) => player.teamId == teamNameVsData.id)
                .map((plr, index) => {
                  return (
                    <Link key={plr.id} href={`/playersProfile/${plr.playerId}`}>
                      {" "}
                      <p key={plr.id}>
                        <span>{index + 1}. </span>
                        {plr.playerName}
                      </p>
                    </Link>
                  );
                })}
            </div>{" "}
            <div className="flex-1">
              <h1 className="font-bold">{vsTeamName} Players List </h1>
              {playersData.data
                .filter((p) => p.scheduleId == params.id)
                .filter((player) => player.teamId == vsTeamNameData.id)
                .map((plr, index) => {
                  return (
                    <Link key={plr.id} href={`/playersProfile/${plr.playerId}`}>
                      <p key={plr.id}>
                        <span>{index + 1}. </span>
                        {plr.playerName}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
