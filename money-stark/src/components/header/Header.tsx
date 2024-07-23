import React, { useContext, useEffect, useState } from "react";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useGetIdentity } from "@refinedev/core";
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import { ColorModeContext } from "../../contexts/color-mode";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "@mui/styles";

export type IUser = {
  id: number;
  name: string;
  avatar: string;
  token?: string;
};

const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky = true,
}) => {
  const getTabValue = (path: string) => {
    if (path.includes("/swing/selection")) return 1;
    if (path.includes("/swing/analysis")) return 2;
    return 0;
  };
  const { mode, setMode } = useContext(ColorModeContext);
  const { data: user } = useGetIdentity<IUser>();
  const [activeTab, setActiveTab] = useState(getTabValue(location.pathname));
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActiveTab(getTabValue(location.pathname));
  }, [location.pathname]);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
    if (newValue === 0) navigate("/swing");
    else if (newValue === 1) navigate("/swing/selection");
    else if (newValue === 2) navigate("/swing/analysis");
  };

  const showTabs = location.pathname.startsWith("/swing");

  return (
    <AppBar position={sticky ? "sticky" : "relative"}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <HamburgerMenu />
          {showTabs && (
            <StyledTabs
              value={activeTab}
              onChange={handleTabChange}
              theme={theme}
            >
              <Tab label="Transactions" />
              <Tab label="Selection" />
              <Tab label="Analysis" />
            </StyledTabs>
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
          >
            <IconButton color="inherit" onClick={() => setMode()}>
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
            {(user?.avatar || user?.name) && (
              <Stack direction="row" gap="16px" alignItems="center">
                {user?.name && (
                  <Typography
                    sx={{ display: { xs: "none", sm: "inline-block" } }}
                    variant="subtitle2"
                  >
                    {user?.name}
                  </Typography>
                )}
                <Avatar src={user?.avatar} alt={user?.name} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const StyledTabs = styled(Tabs)`
  && {
    .MuiTabs-flexContainer {
      border-bottom: 1px solid ${(props) => props.theme.palette.divider};
    }
    .MuiTab-root {
      min-width: auto;
      text-transform: none;
      font-weight: 400;
      font-size: 1rem;
      ${({ theme }) => theme.breakpoints.down("sm")} {
        font-size: 0.875rem;
      }
      color: ${({ theme }) =>
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.text.primary};
    }
    .MuiTab-textColorInherit {
      opacity: 1;
    }
    .Mui-selected {
      color: ${({ theme }) =>
        theme.palette.mode === "dark" ? theme.palette.primary.main : "#fff"};
      font-weight: 400;
    }
  }
`;

export default Header;
