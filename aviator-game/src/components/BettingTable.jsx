import React, { useEffect, useState } from "react";
import "../styles/aviator.css";  // ✅ Betting table styles

const BettingTable = () => {
  const [players, setPlayers] = useState(0);
  const [totalBets, setTotalBets] = useState("0 INR");
  const [totalWinnings, setTotalWinnings] = useState("0 INR");

  useEffect(() => {
    setPlayers(Math.floor(Math.random() * 500) + 100);
  }, []);

  return (
    <div className="betting-table p-4 rounded-lg shadow-lg">
      <div className="flex justify-between text-sm font-semibold">
        <div className="text-center">
          <p>Number of players</p>
          <span id="playersCount">{players}</span>
        </div>
        <div className="text-center">
          <p>Total bets</p>
          <span id="totalBets">{totalBets}</span>
        </div>
        <div className="text-center">
          <p>Total winnings</p>
          <span id="totalWinnings">{totalWinnings}</span>
        </div>
      </div>
    </div>
  );
};

export default BettingTable;
