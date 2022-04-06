import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <Router>
        <Routes>
          {/* Dividido en dos "partes" las publicas y las privadas, cada uno no permite estar en caso de estar o no logado... */}
          <Route exact path='/login' element={<PublicRoute><LoginScreen /></PublicRoute>} />
          <Route path='/*' element={<PrivateRoute><DashboardRoutes /></PrivateRoute>} />
        </Routes>
    </Router>
  )
}