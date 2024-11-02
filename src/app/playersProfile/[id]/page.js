import Image from "next/image";
// get players data from survar.....
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/players", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!data) {
    throw new Error("FeaturedProject Api Error");
  }
  return data;
};

// get all teams data from survar.....
const getTeam = async () => {
  const res = await fetch("http://localhost:3000/api/teamList", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!data) {
    throw new Error("FeaturedProject Api Error");
  }
  return data;
};

export default async function players({ params }) {
  // store all players data in a variable
  const allPlayerProfile = await getData();

  // store all teams data in a variable
  const teamList = await getTeam();

  const selectedPlayerProfile = allPlayerProfile.data.filter(
    (player) => player.id == params.id
  )[0];

  const singleTeam = teamList.data.filter(
    (team) => team.id == selectedPlayerProfile?.teamId
  )[0];
  return (
    <div className="bg-gray-300 p-5 w-[80%] m-auto mt-5">
      <div>
        <div className="w-[10%] m-auto rounded-s-full rounded-e-full bg-slate-400">
          <Image
            className="w-[100%]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg"
            width="100"
            height="100"
            alt={selectedPlayerProfile?.name}
          />
        </div>
        <h1 className="text-center text-3xl font-bold m-5">
          {selectedPlayerProfile?.name}
        </h1>
      </div>
      <div>
        <table className="w-[100%] border-collapse border border-slate-400 text-xl">
          <tbody>
            <tr>
              <td className="border border-slate-400 p-5">Name</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.name}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Country</td>
              <td className="border border-slate-400 p-5">
                {singleTeam?.teamName}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Role</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.roll}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Batting Style</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.battingStyle}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Balling Style</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.ballingStyle}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Run</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.totalRun}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Four</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.four}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Six</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.six}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Ball</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.totalUseBall}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Everage</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.evarage}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">H/Run</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.hRun}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Total Balling</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.totalBaliing}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Wicket</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.totalWicket}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Five Wicket</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.fiveWicket}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Economy</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.economy}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-5">Everage</td>
              <td className="border border-slate-400 p-5">
                {selectedPlayerProfile?.evarage}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
