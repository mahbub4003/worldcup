import DateTimeChecker from "@/components/DateTimeChecker";
import Schedules from "@/components/Schedules";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/schedule");
  const data = await res.json();
  return data;
};

export default async function page() {
  const schedules = await getData();
  console.log("mmmm", new Date().toDateString());
  return (
    <div>
      <div className="underline underline-offset-8">
        <h1 className="text-3xl font-bold text-center">Schedule</h1>
      </div>
      <div>
        <div>
          <DateTimeChecker />
        </div>
        <div className="flex flex-wrap">
          {schedules.data?.map((schedule) => {
            return <Schedules key={schedule.id} schedule={schedule} />;
          })}
        </div>
      </div>
    </div>
  );
}
