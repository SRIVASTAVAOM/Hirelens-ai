const ATSCard = ({ analysis }) => {

  if (!analysis) {

    return (

      <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl flex items-center justify-center">

        <h2 className="text-2xl font-bold">

          Upload Resume to See Analysis

        </h2>

      </div>

    );

  }

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-8">

      {/* ATS Score */}

      <div className="text-center">

        <h2 className="text-3xl font-bold mb-6">

          ATS Score

        </h2>

        <div className="flex justify-center">

          <div className="w-40 h-40 rounded-full border-[12px] border-green-400 flex items-center justify-center text-5xl font-bold">

            {analysis.atsScore}%

          </div>

        </div>

      </div>

      {/* Skills */}

      <div>

        <h3 className="text-2xl font-bold mb-4">

          Skills

        </h3>

        <div className="flex flex-wrap gap-2">

          {

            analysis.skills?.map(
              (skill, index) => (

                <span
                  key={index}
                  className="bg-white text-black px-3 py-1 rounded-full"
                >

                  {skill}

                </span>

              )
            )

          }

        </div>

      </div>

      {/* Strengths */}

      <div>

        <h3 className="text-2xl font-bold mb-4">

          Strengths

        </h3>

        <ul className="list-disc pl-5 space-y-2">

          {

            analysis.strengths?.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )

          }

        </ul>

      </div>

      {/* Weaknesses */}

      <div>

        <h3 className="text-2xl font-bold mb-4">

          Weaknesses

        </h3>

        <ul className="list-disc pl-5 space-y-2">

          {

            analysis.weaknesses?.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )

          }

        </ul>

      </div>

      {/* Suggestions */}

      <div>

        <h3 className="text-2xl font-bold mb-4">

          Suggestions

        </h3>

        <ul className="list-disc pl-5 space-y-2">

          {

            analysis.suggestions?.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )

          }

        </ul>

      </div>

    </div>

  );

};

export default ATSCard;