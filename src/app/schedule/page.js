import Schedules from "@/components/Schedules";

//get schedules data from surver...
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function page() {
  //store schedules data in variable...
  const schedules = await getData();
  return (
    <div>
      <div className="underline underline-offset-8">
        <h1 className="text-3xl font-bold text-center">Schedules</h1>
      </div>
      <div>
        <div></div>
        <div className="flex flex-wrap">
          {/* loopping all schdules here */}
          {schedules.data?.map((schedule) => {
            return <Schedules key={schedule.id} schedule={schedule} />;
          })}
        </div>
      </div>
    </div>
  );
}
