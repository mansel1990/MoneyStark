import { InsertChart } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useColorMode } from "../../contexts/color-mode";

interface Props {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<Props> = ({ title, value, icon }) => {
  const { mode } = useColorMode();

  return (
    <Box
      className={`stat-card ${mode}`}
      display="flex"
      alignItems="center"
      p={2}
    >
      {icon}
      <Box ml={2}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatCard;
