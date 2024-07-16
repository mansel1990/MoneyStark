import React from "react";
import StatusCards from "./StatusCards";
import Portfolio from "../Portfolio/Portfolio";

const Dashboard = () => {
  return (
    <div className="dashboard-header">
      <StatusCards />
      <Portfolio />
    </div>
  );
};

export default Dashboard;
