import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer

} from "recharts";

import {

  useEffect,
  useState

} from "react";

import axios from "axios";

const History = () => {

  const [analyses, setAnalyses] =
    useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    try {

      const response =
        await axios.get(

          "http://import.meta.env.VITE_API_URL/api/ai/history"

        );

      setAnalyses(
        response.data.analyses
      );

    } catch (error) {

      console.log(error);

    }

  };

  const deleteHistory =
    async (id) => {

      try {

        await axios.delete(

          `http://import.meta.env.VITE_API_URL/api/ai/history/${id}`

        );

        fetchHistory();

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">

        Resume Analysis History

      </h1>

      {/* Chart */}

      <div className="bg-white/10 p-6 rounded-3xl mb-10">

        <h2 className="text-2xl font-bold mb-6">

          ATS Progress

        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart data={analyses}>

            <XAxis dataKey="createdAt" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="atsScore"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* History Cards */}

      <div className="space-y-6">

        {

          analyses.map(
            (item) => (

              <div
                key={item.id}
                className="bg-white/10 p-6 rounded-2xl border border-white/10"
              >

                <h2 className="text-2xl font-bold">

                  ATS Score:
                  {item.atsScore}%

                </h2>

                <p className="mt-2 text-gray-300">

                  {

                    new Date(
                      item.createdAt
                    ).toLocaleString()

                  }

                </p>

                {/* Skills */}

                <div className="mt-4">

                  <h3 className="font-bold mb-2">

                    Skills

                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {

                      item.skills.map(
                        (skill, index) => (

                          <span
                            key={index}
                            className="bg-white text-black px-3 py-1 rounded-full text-sm"
                          >

                            {skill}

                          </span>

                        )
                      )

                    }

                  </div>

                </div>

                {/* Strengths */}

                <div className="mt-4">

                  <h3 className="font-bold mb-2">

                    Strengths

                  </h3>

                  <ul className="list-disc pl-5">

                    {

                      item.strengths.map(
                        (strength, index) => (

                          <li key={index}>
                            {strength}
                          </li>

                        )
                      )

                    }

                  </ul>

                </div>

                {/* Suggestions */}

                <div className="mt-4">

                  <h3 className="font-bold mb-2">

                    Suggestions

                  </h3>

                  <ul className="list-disc pl-5">

                    {

                      item.suggestions.map(
                        (suggestion, index) => (

                          <li key={index}>
                            {suggestion}
                          </li>

                        )
                      )

                    }

                  </ul>

                </div>

                {/* Delete Button */}

                <button

                  onClick={() =>
                    deleteHistory(item.id)
                  }

                  className="mt-6 bg-red-500 px-4 py-2 rounded-xl"

                >

                  Delete

                </button>

              </div>

            )
          )

        }

      </div>

    </div>

  );

};

export default History;