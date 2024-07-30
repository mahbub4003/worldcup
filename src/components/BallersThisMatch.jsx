import Link from "next/link";
import React from "react";

export default function BallersThisMatch() {
  return (
    <div>
      <div className="text-gray-600 font-bold">Ballers...</div>
      <table className="w-[100%] text-center">
        <tbody>
          <tr className="border-collapse border border-slate-900">
            <th className="p-2 sm:p-3">Name</th>
            <th></th>
            <th className="p-1 sm:p-3">Overs</th>
            <th className="p-1 sm:p-3">Runs</th>
            <th className="p-1 sm:p-3">Wickets</th>
            <th className="p-1 sm:p-3">Economy</th>
          </tr>

          <tr className="border-collapse border border-slate-900">
            <td className="p-2 sm:p-3">
              <Link href="/playersProfile/4">Shakib</Link>
            </td>
            <td>Baller</td>
            <td className="p-2 sm:p-3">4</td>
            <td className="p-2 sm:p-3">30</td>
            <td className="p-2 sm:p-3">1</td>
            <td className="p-2 sm:p-3">7.5</td>
          </tr>
          <tr className="border-collapse border border-slate-900">
            <td className="p-2 sm:p-3">
              <Link href="/playersProfile/3">Shakib</Link>
            </td>
            <td>Baller</td>
            <td className="p-2 sm:p-3">4</td>
            <td className="p-2 sm:p-3">30</td>
            <td className="p-2 sm:p-3">1</td>
            <td className="p-2 sm:p-3">7.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
