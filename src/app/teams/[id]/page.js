import Link from "next/link";
import React from "react";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/players", {
    cache: "no-cache",
  });
  const data = await res.json();
  if (!data) {
    throw new Error("FeaturedProject Api Error");
  }
  return data;
};
const getTeam = async () => {
  const res = await fetch("http://localhost:3000/api/teamList");
  const data = await res.json();
  if (!data) {
    throw new Error("FeaturedProject Api Error");
  }
  return data;
};

export default async function page({ params }) {
  const teamPlayers = await getData();
  const teamList = await getTeam();
  const filteredPlayers = teamPlayers.data?.filter(
    (player) => player.teamId == params.id
  );
  const singleTeam = teamList.data?.filter((team) => team.id == params.id);

  return (
    <div className="bg-gray-300 p-5 w-[80%] m-auto mt-5">
      <div className="text-center bg-white p-2 mb-2 uppercase	">
        <h1 className="text-4xl font-bold">
          {singleTeam.length == 1 && singleTeam[0].teamName}
        </h1>
      </div>
      <div className="w-[30%] m-auto">
        <ul className=" inline-block w-[100%] text-center font-bold text-gray-500 text-2xl ">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => {
              return (
                <li key={player.id} className="hover:text-purple-500 text-left">
                  <Link href={`/playersProfile/${player.id}`}>
                    {index + 1}. {player.name}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>Players not found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
