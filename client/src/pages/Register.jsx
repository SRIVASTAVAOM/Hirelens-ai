import { registerUser }
from "../services/authService";

import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

const Register = () => {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await registerUser({

            name,
            email,
            password

          });

        console.log(
          response.data
        );

        alert(
          "Registration successful"
        );

        // Redirect to login

        navigate(
          "/login"
        );

      } catch (error) {

        console.log(error);

        alert(
          "Registration failed"
        );

      }

    };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">

          Register

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-lg"
          />

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

            Register

          </button>

        </form>

        <p className="mt-6 text-gray-500 text-center">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-500 font-semibold"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

};

export default Register;