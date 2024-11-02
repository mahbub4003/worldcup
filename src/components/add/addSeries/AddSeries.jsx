"use client";

import { useEffect, useState } from "react";
import { postData, getTeam } from "./addSeriesUtility";

export default function AddSeries({ header }) {
  const [series, setSeries] = useState("");
  // form submit handler bellow
  const submitHandler = (e) => {
    e.preventDefault();
    // cloud oparation for add new series name
    postData(
      JSON.stringify({
        name: series,
      })
    );
    setSeries("");
  };

  return (
    <div>
      <form className="w=[100%]" onSubmit={submitHandler}>
        <div className="">
          <label className="block">Add Series Name</label>
          <input
            className="m-1 w-[80%] rounded p-1"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            required
          />
        </div>
        <div className="w-[20%] m-auto">
          <input
            className="rounded bg-slate-500 hover:bg-slate-400 w-[100%] my-4 text-xl font-bold text-green-500 hover:text-green-800 duration-1000 transition"
            type="submit"
            value={"Add Series"}
          />
        </div>
      </form>
    </div>
  );
}
