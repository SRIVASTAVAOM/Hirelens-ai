import { useState } from "react";

import ResumeUpload from "../components/ResumeUpload";

import ATSCard from "../components/ATSCard";

import Navbar from "../components/Navbar";

const Dashboard = () => {

  const [analysis, setAnalysis] =
    useState(null);

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="p-10">

        {/* Welcome */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-4">

            Hi Champions!

          </h1>

          <p className="text-gray-400 text-lg">

            Analyze your resume and improve
            your ATS score with AI.

          </p>

        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/10 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold">

              AI Powered

            </h2>

            <p className="text-gray-400 mt-2">

              Instant resume analysis
              using AI models.

            </p>

          </div>

          <div className="bg-white/10 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold">

              ATS Tracking

            </h2>

            <p className="text-gray-400 mt-2">

              Track your ATS score
              improvement over time.

            </p>

          </div>

          <div className="bg-white/10 p-6 rounded-3xl">

            <h2 className="text-2xl font-bold">

              Resume History

            </h2>

            <p className="text-gray-400 mt-2">

              Access previous analyses
              anytime.

            </p>

          </div>

        </div>

        {/* Resume Upload */}

        <ResumeUpload
          setAnalysis={setAnalysis}
        />

        {/* ATS Card */}

        {

          analysis && (

            <div className="mt-10">

              <ATSCard
                analysis={analysis}
              />

            </div>

          )

        }

      </div>

    </div>

  );

};

export default Dashboard;