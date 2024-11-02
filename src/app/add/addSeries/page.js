import AddSeries from "@/components/add/addSeries/AddSeries";
import { headers } from "next/headers";
export default async function page() {
  const header = headers().get("fail");

  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <h1 className="underline text-green-600 text-center text-4xl font-bold">
        Add New Series {header}
      </h1>
      <div>
        <AddSeries />
      </div>
    </div>
  );
}
