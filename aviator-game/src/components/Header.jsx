import React from "react";
import "../styles/aviator2.css";  // ✅ Import specific styles for header

const Header = () => {
  const openWallet = () => {
    window.location.href = "/wallet";
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="head-text text-xl sm:text-3xl font-bold">PLAY2BETS</h1>
      <div className="wallet flex items-center cursor-pointer" onClick={openWallet}>
        <i className="fas fa-wallet text-2xl mr-2"></i>
        <div className="wallet-info text-left">
          <p>Avail Bal. Rs: <span id="wallet-balance">1000.0</span></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
