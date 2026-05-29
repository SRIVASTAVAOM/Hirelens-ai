import { Navigate }
from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const token =
    localStorage.getItem("token");

  // If no token
  if (!token) {

    return <Navigate to="/login" />;

  }

  // If logged in
  return children;

};

export default ProtectedRoute;