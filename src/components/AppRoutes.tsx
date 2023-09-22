import { routes } from "@/constants/routes";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Route } from "electron-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
