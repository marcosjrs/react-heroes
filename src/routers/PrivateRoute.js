import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  //Guardamos la ultima path (el search es cuando hacemos las busquedas de superheroe)
  localStorage.setItem("lastPath", pathname + search);
  //Sin no está logado redirecciona a login de nuevo
  return user.logged ? children : <Navigate to="/login" />;
};
