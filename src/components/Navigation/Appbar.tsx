import { routes } from "@/constants/routes";
import { AppBar, Box, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../app.css";

interface NavTab {
  icon: any;
  title: string;
  route: string;
}

const tabs: NavTab[] = [];

export function Appbar(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar className="appBarContainer">
        <Toolbar className="appBarToolbarContainer">
          <MenuItem onClick={() => navigate(routes.home)}>
            <Typography color={"white"}>BrainMapPro</Typography>
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
          <Box display="flex" flexDirection='row' justifyContent='flex-end'>
          <Button variant="contained" color="success">ICA Prepocessing</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
