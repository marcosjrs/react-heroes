import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
  return (
    <Router>
        <Routes>
          {/* Además de las routas, cada uno tiene su header con los enlaces */}
          <Route exact path='/login' element={<LoginScreen />} />
          <Route path='/*' element={<DashboardRoutes />} />
        </Routes>
    </Router>
  )
}