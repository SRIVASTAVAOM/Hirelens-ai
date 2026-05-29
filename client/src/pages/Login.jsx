import { loginUser }
from "../services/authService";

import { useState } from "react";

import {
  useNavigate,
  Link,
  Navigate
} from "react-router-dom";

const Login = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await loginUser({

            email,
            password

          });

        console.log(
          response.data
        );

        // Save token

        localStorage.setItem(

          "token",

          response.data.token

        );

        alert(
          "Login successful"
        );

        // Redirect

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Login failed"
        );

      }

    };

  const token =
    localStorage.getItem(
      "token"
    );

  if (token) {

    return (
      <Navigate
        to="/dashboard"
      />
    );

  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">

          Login

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800"
          >

            Login

          </button>

        </form>

        <p className="mt-6 text-gray-500 text-center">

          New user?{" "}

          <Link
            to="/register"
            className="text-blue-500 font-semibold"
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

};

export default Login;