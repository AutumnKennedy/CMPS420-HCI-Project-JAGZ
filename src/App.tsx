import { AppRoutes } from "./components/AppRoutes";
import { Appbar } from "./components/Appbar";
import "./app.css";

function App() {
  return (
    <div className="appContainer">
      <Appbar />
      {/* <DrawerNavigation /> */}

      <AppRoutes />
    </div>
  );
}

export default App;
