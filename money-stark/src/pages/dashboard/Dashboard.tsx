import React, { useState, useEffect } from "react";
import { formatRupee } from "../../utils/utils";
import { Row, Col } from "antd";
import StatCard from "../../components/Dashboard/StatCard";

const investmentData = {
  investedValue: 100000,
  presentValue: 121000.35,
  unrealizedPL: 21000.35,
  realizedPL: -2000.21,
};

const Dashboard = () => {
  const [unrealizedCls, setUnrealizedCls] = useState("bg-gradient-green");
  const [realizedCls, setRealizedCls] = useState("bg-gradient-green");

  useEffect(() => {
    if (investmentData.unrealizedPL < 0) {
      setUnrealizedCls("bg-gradient-red");
    }
    if (investmentData.realizedPL < 0) {
      setRealizedCls("bg-gradient-red");
    }
  }, []);

  return (
    <div className="dashboard-header">
      <Row gutter={30} className="dashboard-header">
        <Col xs={24} md={12} lg={6} className="card">
          <StatCard
            icon="icon"
            title="Invested Value"
            count={investmentData.investedValue}
            percentage={10}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <div className={`trend-box ${unrealizedCls}`}>
            <div className="trend-box-title">Present Value </div>
            <div className="trend-box-value">
              {formatRupee(investmentData.presentValue)}
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <div className={`trend-box ${unrealizedCls}`}>
            <div className="trend-box-title">Unrealized P&L</div>
            <div className="trend-box-value">
              {formatRupee(investmentData.unrealizedPL)}
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <div className={`trend-box ${realizedCls}`}>
            <div className="trend-box-title">Realized P&L</div>
            <div className="trend-box-value">
              {formatRupee(investmentData.realizedPL)}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
