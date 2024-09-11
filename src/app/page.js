import DateTimeChecker from "@/components/DateTimeChecker";
import Schedules from "@/components/Schedules";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default async function Home() {
  const schedules = await getData();
  const date = new Date();
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
