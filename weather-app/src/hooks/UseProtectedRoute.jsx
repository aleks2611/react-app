import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./UseAuth";

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useAuth();
  const location = useLocation();
  const isUserLogin = isLogin();
  const currentPath = location.pathname;
  const isPathLogin = currentPath === "/login";

  if (isUserLogin && isPathLogin) {
    return <Navigate to="/home" replace />;
  }

  if (!isUserLogin && !isPathLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
