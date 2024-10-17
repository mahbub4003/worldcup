import Link from "next/link";
import React from "react";

export default function BattingOnCrease({ player }) {
  return (
    <tr key={player.id} className="border-collapse border border-slate-900">
      <td className="p-2 sm:p-3">
        <Link href={`/playersProfile/${player.playerId}`}>
          {player.playerName} {player.onStricke && "*"}
        </Link>
      </td>
      <td>Batting</td>
      <td className="p-2 sm:p-3">{player.totalRun}</td>
      <td className="p-2 sm:p-3">{player.playedBall}</td>
      <td className="p-2 sm:p-3">{player.four}</td>
      <td className="p-2 sm:p-3">{player.six}</td>
      <td className="p-2 sm:p-3">
        {player.totalRun > 0
          ? (parseInt(player.totalRun) / parseInt(player.playedBall)) * 100
          : "00"}
      </td>
    </tr>
  );
}
