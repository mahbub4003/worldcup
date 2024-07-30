import AddPlayer from "@/components/add/addPlayer/AddPlayer";

export default async function page() {
  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h1 className="underline text-green-600 text-center font-bold text-4xl">
        Add New Player
      </h1>
      <div>
        <AddPlayer />
      </div>
    </div>
  );
}
