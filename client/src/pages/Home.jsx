import {
  Link,
  Navigate
} from "react-router-dom";

import { useState } from "react";

import ResumeUpload from "../components/ResumeUpload";

import ATSCard from "../components/ATSCard";

const Home = () => {

  const [analysis, setAnalysis] =
    useState(null);

  const token =
    localStorage.getItem("token");

  if (token) {

    return (
      <Navigate to="/dashboard" />
    );

  }

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}

      <div className="flex items-center justify-between px-10 py-6 border-b border-white/10">

        <h1 className="text-3xl font-bold">

          HireLens AI

        </h1>

        <div className="flex gap-4">

          <Link to="/login">

            <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white/10 transition">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="bg-blue-500 px-5 py-2 rounded-xl hover:scale-105 transition">

              Register

            </button>

          </Link>

        </div>

      </div>

      {/* Hero Section */}

      <div className="max-w-7xl mx-auto px-10 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-400 font-semibold mb-4">

              AI-Powered Resume Analyzer

            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              Boost Your Resume ATS Score 🚀

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">

              Upload your resume and get
              instant AI-powered analysis,
              ATS score, strengths,
              weaknesses, and smart
              improvement suggestions.

            </p>

            <div className="flex gap-4">

              <Link to="/register">

                <button className="bg-blue-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

                  Get Started

                </button>

              </Link>

              <Link to="/login">

                <button className="border border-white/20 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">

                  Login

                </button>

              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">

            <ResumeUpload
              setAnalysis={setAnalysis}
            />

          </div>

        </div>

        {/* ATS Result */}

        {

          analysis && (

            <div className="mt-20">

              <ATSCard
                analysis={analysis}
              />

            </div>

          )

        }

        {/* Footer */}

        <p className="text-center text-gray-500 mt-24">

          Developed by Om Kumar 🚀

        </p>

      </div>

    </div>

  );

};

export default Home;