const fs = require("fs");

const pdfParse = require("pdf-parse");

const groq = require("../config/groq");

const prisma = require("../config/prisma");

exports.parseResume = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No resume uploaded"
      });

    }

    // Read PDF
    const dataBuffer =
      fs.readFileSync(req.file.path);

    // Extract text
    const parsedData =
      await pdfParse(dataBuffer);

    const resumeText =
      parsedData.text;

    // AI Analysis
    const completion =
      await groq.chat.completions.create({

        messages: [

          {
            role: "system",
            content:
              "You are an expert ATS resume analyzer."
          },

          {
            role: "user",
            content: `
Analyze this resume.

Return ONLY valid JSON.

Format:

{
  "atsScore": 85,
  "skills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:

${resumeText}
`
          }

        ],

        model: "llama-3.1-8b-instant"

      });

    // Extract AI response
    const rawResponse =
      completion.choices[0].message.content;

    let analysis;

    try {

      analysis =
        JSON.parse(rawResponse);

    } catch (error) {

      console.log(
        "JSON Parse Error:",
        error
      );

      console.log(
        "Raw AI Response:",
        rawResponse
      );

      analysis = {

        atsScore: 0,

        skills: [],

        strengths: [],

        weaknesses: [],

        suggestions: []

      };

    }

    // Fix skills objects
    analysis.skills =
      analysis.skills.map((skill) => {

        if (
          typeof skill === "object"
        ) {

          return skill.name;

        }

        return skill;

      });

    // Save only if user logged in

if (req.user) {

  await prisma.resumeAnalysis.create({

    data: {

      atsScore:
        analysis.atsScore,

      skills:
        analysis.skills,

      strengths:
        analysis.strengths,

      weaknesses:
        analysis.weaknesses,

      suggestions:
        analysis.suggestions,

      userId:
        req.user.id

    }

  });

}
    // Send response
    res.status(200).json({

      message:
        "Resume analyzed successfully",

      analysis

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};

exports.getAnalysisHistory =
async (req, res) => {

  try {

    const analyses =
  await prisma.resumeAnalysis.findMany({

    where: {

      userId:
        req.user.id

    },

    orderBy: {

      createdAt: "desc"

    }

  });

    res.status(200).json({

      analyses

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};

exports.deleteAnalysis =
async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.resumeAnalysis.delete({

      where: {
        id
      }

    });

    res.status(200).json({

      message:
        "Analysis deleted successfully"

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};