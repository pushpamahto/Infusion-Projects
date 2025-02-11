import React, { useState } from "react";
import "../styles/stake-aviator.css";  // ✅ Stake panel styles

const StakePanel = () => {
  const [betAmount, setBetAmount] = useState(20);

  const placeBet = () => {
    alert(`Bet Placed: ₹${betAmount}`);
  };

  return (
    <div className="stake-container p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Place Your Bet</h2>
      <input
        type="number"
        className="w-full p-2 rounded"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
      />
      <button
        onClick={placeBet}
        className="w-full mt-2 bg-green-500 text-white p-2 rounded"
      >
        Place Bet
      </button>
    </div>
  );
};

export default StakePanel;
