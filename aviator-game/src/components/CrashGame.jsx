
import React, { useState, useEffect } from "react";
import "../styles/aviator2.css";  // ✅ Crash game animations

const CrashGame = () => {
  const [countdown, setCountdown] = useState(9);
  const [multiplier, setMultiplier] = useState(1.0);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setInterval(() => setMultiplier(prev => (prev < 10 ? prev + 0.1 : prev)), 100);
    }
  }, [countdown]);

  return (
    <div className="crash-container relative">
      <div className="countdown-display text-center">
        {countdown > 0 ? <h1>{countdown}</h1> : <h1>x{multiplier.toFixed(2)}</h1>}
      </div>
    </div>
  );
};

export default CrashGame;
