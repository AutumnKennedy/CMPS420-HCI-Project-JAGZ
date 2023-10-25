import { AppRoutes } from "./components/Navigation/AppRoutes";
import { Appbar } from "./components/Navigation/Appbar";
import "./app.css";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="appContainer">
      <AppRoutes />
    </Box>
  );
}

export default App;
