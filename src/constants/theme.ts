import { createTheme } from "@mui/material";

export const theme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#5f5e5e",
      },
      text: {
        primary: "white",
      },
    },
  });
