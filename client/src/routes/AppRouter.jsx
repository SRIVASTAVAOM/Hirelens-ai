import ProtectedRoute
from "./ProtectedRoute";
import Home from "../pages/Home";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import PrivateRoute from "../components/PrivateRoute";
import Chatbot from "../pages/Chatbot";

const AppRouter = () => {

  return (

    <BrowserRouter>

      <Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/register"
    element={<Register />}
  />

  <Route
    path="/chatbot"
    element={<Chatbot />}
  />

  <Route
    path="/dashboard"
    element={

      <PrivateRoute>

        <Dashboard />

      </PrivateRoute>

    }
  />

  <Route
    path="/history"
    element={

      <PrivateRoute>

        <History />

      </PrivateRoute>

    }
  />

</Routes>
    </BrowserRouter>

  );

};

export default AppRouter;