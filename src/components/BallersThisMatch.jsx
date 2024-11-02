import Link from "next/link";
import React from "react";

export default function BallersThisMatch({ player }) {
  return (
    <tr className="border-collapse border border-slate-900">
      <td className="p-2 sm:p-3">
        <td className="p-2 sm:p-3">
          <Link href={`/playersProfile/${player?.playerId}`}>
            {player?.playerName} {player?.onStricke && "*"}
          </Link>
        </td>
      </td>
      <td>Baller</td>
      <td className="p-2 sm:p-3">
        {player?.ballingToday > 0
          ? `${Math.floor(player?.ballingToday / 6)}.${
              player?.ballingToday % 6
            }`
          : "00"}
      </td>
      <td className="p-2 sm:p-3">{player?.considRunToday}</td>
      <td className="p-2 sm:p-3">{player?.wicketToday}</td>
      <td className="p-2 sm:p-3">
        {player?.considRunToday
          ? ((player?.considRunToday / player?.ballingToday) * 6).toFixed(2)
          : "0.00"}
      </td>
    </tr>
  );
}
