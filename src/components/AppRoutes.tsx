import { routes } from "@/constants/routes";
import { HomePage } from "@/pages/HomePage";
import { Route } from "electron-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter basename={routes.home}>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
