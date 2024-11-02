import AddTeam from "@/components/add/addTeam/AddTeam";

export default async function page() {
  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h1 className="underline text-green-600 text-center text-4xl font-bold">
        Add New Team
      </h1>
      <div>
        {/* add team component */}
        <AddTeam />
      </div>
    </div>
  );
}
