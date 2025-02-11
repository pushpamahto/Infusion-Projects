import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CrashGame from "./components/CrashGame";
import BettingTable from "./components/BettingTable";
import StakePanel from "./components/StakePanel";
import History from "./components/History";

import "./styles/aviator.css";  // 🛩️ Main Aviator Styles
import "./styles/aviator2.css";  // 🎨 Additional Styles
import "./styles/stake-aviator.css";  // 💰 Stake Panel
import "./styles/history-aviator.css";  // 🏆 History Panel

const App = () => {
  return (
    <div className="bg-[#12142c] text-white">
      <Header />
      <main className="midcom px-5 py-2 xl:py-10 lg:px-14">
        <BettingTable />
        <CrashGame />
        <StakePanel />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default App;
