import { Row, Col } from "antd";
import StatCard from "../../components/Dashboard/StatCard";
import {
  AttachMoney,
  InsertChart,
  ShowChart,
  TrendingDown,
} from "@mui/icons-material";

const investmentData = {
  investedValue: 100000,
  presentValue: 121000.35,
  unrealizedPL: 21000.35,
  realizedPL: -2000.21,
};

const StatusCards = () => {
  return (
    <div>
      <Row gutter={30} className="dashboard-header">
        <Col xs={24} md={12} lg={6} className="card">
          <StatCard
            icon={<InsertChart fontSize="large" />}
            title="Invested Value"
            value={investmentData.investedValue}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <StatCard
            icon={<AttachMoney fontSize="large" />}
            title="Present Value"
            value={investmentData.presentValue}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <StatCard
            icon={<TrendingDown fontSize="large" />}
            title="Realized P/L"
            value={investmentData.unrealizedPL}
          />
        </Col>
        <Col xs={24} md={12} lg={6} className="card">
          <StatCard
            icon={<ShowChart fontSize="large" />}
            title="Unrealized P/L"
            value={investmentData.realizedPL}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StatusCards;
