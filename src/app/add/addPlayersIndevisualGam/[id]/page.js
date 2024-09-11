import AddPlayers from "@/components/add/addPlayersIndevisualGam/AddPlayersIndevisualGam";

export default async function page({ params }) {
  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h1 className="underline text-green-600 text-center font-bold text-4xl">
        Add Team Player
      </h1>

      <div>
        <AddPlayers id={params.id} />
      </div>
    </div>
  );
}
