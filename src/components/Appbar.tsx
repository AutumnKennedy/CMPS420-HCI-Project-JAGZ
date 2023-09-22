import { routes } from "@/constants/routes";
import {
  DataUsage,
  ImportContactsRounded,
  Panorama,
  SsidChart,
} from "@mui/icons-material";
import { AppBar, Box, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";

const tabs = [
  {
    title: "Import",
    icon: <ImportContactsRounded />,
    route: routes.import,
  },
  { title: "Plot Data", icon: <SsidChart />, route: routes.plotData },
  {
    title: "Preprocess Data",
    icon: <DataUsage />,
    route: routes.preprocessData,
  },
  { title: "Visualize Data", icon: <Panorama />, route: routes.visualizeData },
];

export function Appbar(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar className="appBarContainer">
        <Toolbar className="appBarToolbarContainer">
          <MenuItem onClick={() => navigate(routes.home)}>
            <Typography color={"white"}>EEG Data Plot Toolbox</Typography>
          </MenuItem>

          <Box display={"flex"}>
            {tabs.map((tab, index) => (
              <MenuItem key={index} onClick={() => navigate(tab.route)}>
                <Typography className="iconAndTitle">
                  {tab.icon}
                  {tab.title}
                </Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
