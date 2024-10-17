import Link from "next/link";

export default function page({ params }) {
  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded my-2">
      <div className="flex w-[80%] m-auto ">
        <div className="flex-1">
          <Link href={`/scooring/${params.id}/addInformationSchedule/toss`}>
            Add Toss
          </Link>
        </div>
        <div className="flex-1">
          <Link
            href={`/scooring/${params.id}/addInformationSchedule/addBallerOrBatter`}
          >
            Add Batter Or Baller
          </Link>
        </div>
        <div className="flex-1">
          <Link href={"/add/addSchedule"}>Add Schedule</Link>
        </div>
        <div className="flex-1">
          <Link href={"/add/addSeries"}>Add Series</Link>
        </div>
      </div>
    </div>
  );
}
