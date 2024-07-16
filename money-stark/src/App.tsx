// App.tsx

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { notificationProvider, RefineSnackbarProvider } from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { ColorModeContextProvider } from "./contexts/color-mode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import authProvider from "./AuthBindings";
import "./styles/App.less";
import AppRoutes from "./Routes";
import { CustomDocumentTitleHandler } from "./components/common/CustomDocumentTitleHandler";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                authProvider={authProvider}
                routerProvider={routerBindings}
                resources={[
                  {
                    name: "prediction_list",
                    list: "/prediction-list",
                    icon: <AssessmentIcon />,
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "dashboard",
                    list: "/dashboard",
                    icon: <DashboardIcon />,
                    meta: {
                      canDelete: true,
                    },
                  },
                  {
                    name: "portfolio",
                    list: "/portfolio",
                    icon: <QueryStatsIcon />,
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "7TXE8L-6a97Bg-dyH76J",
                }}
              >
                <AppRoutes />

                <RefineKbar />
                <UnsavedChangesNotifier />
                <CustomDocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
