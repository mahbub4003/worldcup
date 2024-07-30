import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="sm:w-[50%] w-[80%] m-auto bg-slate-300 p-4 rounded">
      <div className="flex w-[80%] m-auto ">
        <div className="flex-1">
          <Link href={"/add/addTeam"}>Add Team</Link>
        </div>
        <div className="flex-1">
          <Link href={"/add/addPlayer"}>Add Player</Link>
        </div>
        <div className="flex-1">
          <Link href={"/add/addTeam"}>Add Team</Link>
        </div>
      </div>
    </div>
  );
}
