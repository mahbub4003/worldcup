import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/teamList", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!data) {
    throw new Error("FeaturedProject Api Error");
  }
  return data;
};
export default async function TeamList() {
  const teamlist = await getData();
  return (
    <div className="bg-gray-300 p-5 w-[80%] m-auto mt-5">
      <div className="sm:w-[30%] m-auto">
        <ul className=" inline-block w-[100%] text-center font-bold text-gray-500 text-2xl ">
          {teamlist.data.map((team) => {
            return (
              <li key={team.id} className="hover:text-purple-500 text-left">
                <Link href={`/teams/${team.id}`}>
                  {team.id}. {team.teamName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
