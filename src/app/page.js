import Schedules from "@/components/Schedules";

// get all schedule data from database...
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  // store all schadule data in schedules constant...
  const schedules = await getData();
  return (
    <main className="m-5">
      <div className="flex flex-wrap">
        {schedules.data?.map((schedule) => {
          return <Schedules key={schedule.id} schedule={schedule} />;
        })}
      </div>
    </main>
  );
}
