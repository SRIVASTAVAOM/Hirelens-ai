import { useState } from "react";

import { analyzeResume } from "../services/aiservice";

const ResumeUpload = ({
  setAnalysis
}) => {

  const [file, setFile] =
    useState(null);

  const [jobDescription,
    setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleUpload =
    async () => {

      if (!file) {

        return alert(
          "Please select resume"
        );

      }

      try {

        setLoading(true);

        const response =
          await analyzeResume(

            file,

            jobDescription

          );

        console.log(
          response.data
        );

        setAnalysis(
          response.data.analysis
        );

      } catch (error) {

        console.log(error);

        alert("Analysis failed");

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

      <h2 className="text-3xl font-bold mb-6">

        Upload Resume

      </h2>

      {/* Resume Upload */}

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
        className="mb-6 w-full bg-white/10 p-4 rounded-xl border border-white/10"
      />

      {/* JD Input */}

      <textarea

        placeholder="Optional: Paste Job Description for ATS Matching..."

        value={jobDescription}

        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }

        className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4 text-white mb-6 outline-none"

      ></textarea>

      {/* Button */}

      <button
        onClick={handleUpload}
        className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300"
      >

        {

          loading
            ? "Analyzing..."
            : "Analyze Resume"

        }

      </button>

    </div>

  );

};

export default ResumeUpload;