import { routes } from "@/constants/routes";
import { HomePage } from "@/pages/HomePage";
import { ImportData } from "@/pages/ImportData/ImportData";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Route } from "electron-router-dom";
import { Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.import} element={<ImportData />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
