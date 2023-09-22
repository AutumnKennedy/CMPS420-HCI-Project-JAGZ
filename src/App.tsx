import { AppRoutes } from "./components/Navigation/AppRoutes";
import { Appbar } from "./components/Navigation/Appbar";
import "./app.css";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="appContainer">
      <Appbar />

      <Box className="appRoutesBoxContainer">
        <AppRoutes />
      </Box>
    </div>
  );
}

export default App;
