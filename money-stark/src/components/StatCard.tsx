import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  count: number;
  percentage: number;
}

const StatCard: React.FC<Props> = ({ icon, title, count, percentage }) => {
  return (
    <div className="stat-card">
      <div className="icon-container">{icon}</div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="count">{count}</p>
        <p className="percentage">+{percentage}% than last week</p>
      </div>
    </div>
  );
};

export default StatCard;
