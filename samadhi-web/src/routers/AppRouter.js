import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Private } from "../components/private/Private";
import ScrollToTop from "../helpers/ScrollToTop";
import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
    
        <Route path="/*" element={
                  <DashboardRoutes />
              } 
          />
  
          <Route path="/auth/*" element={
                <PublicRoute>
                  <AuthRouter />
                </PublicRoute>
              } 
          />
  
          <Route path="/alumnos" element={
                <PrivateRoute>
                  <Private />
                </PrivateRoute>
              } 
          />
  
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

