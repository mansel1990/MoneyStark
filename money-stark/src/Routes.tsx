import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Authenticated } from "@refinedev/core";
import {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import { ErrorComponent, ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/mui";
import Dashboard from "./pages/dashboard/Dashboard";
import PredictionList from "./pages/PredictionList/PredictionList";
import Login from "./pages/login";
import Header from "./components/header/Header";
import { AppIcon } from "./components/app-icon";
import PortfolioTable from "./pages/Portfolio/PortfolioTable";
import SwingTrading from "./pages/SwingTrading/SwingTrading";
import StockSelection from "./pages/SwingTrading/StockSelection/StockSelection";
import StockAnalysis from "./pages/SwingTrading/StockAnalysis/StockAnalysis";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <Authenticated
            key="authenticated-inner"
            fallback={<CatchAllNavigate to="/login" />}
          >
            <ThemedLayoutV2
              Header={() => <Header sticky />}
              Title={({ collapsed }) => (
                <ThemedTitleV2
                  collapsed={collapsed}
                  text="Money Stark"
                  icon={<AppIcon />}
                />
              )}
            >
              <Outlet />
            </ThemedLayoutV2>
          </Authenticated>
        }
      >
        <Route index element={<Navigate to="/prediction-list" replace />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/prediction-list">
          <Route index element={<PredictionList />} />
        </Route>
        <Route path="/portfolio">
          <Route index element={<PortfolioTable />} />
        </Route>
        <Route path="/swing">
          <Route index element={<SwingTrading />} />
          <Route path="selection" element={<StockSelection />} />
          <Route path="analysis" element={<StockAnalysis />} />
        </Route>
        <Route path="*" element={<ErrorComponent />} />
      </Route>
      <Route
        element={
          <Authenticated key="authenticated-outer" fallback={<Outlet />}>
            <NavigateToResource />
          </Authenticated>
        }
      >
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
