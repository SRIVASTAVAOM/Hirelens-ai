const fs = require("fs");

const pdfParse = require("pdf-parse");

const groq = require("../config/groq");

exports.parseResume = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No resume uploaded"
      });

    }

    // Read PDF
    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text
    const parsedData = await pdfParse(dataBuffer);

    const resumeText = parsedData.text;

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

Return:
- Skills
- Strengths
- Weaknesses
- ATS score out of 100
- Improvement suggestions

Resume:

${resumeText}
`
      }

    ],

    model: "llama-3.1-8b-instant"

});

    // Extract AI response
    const analysis =
      completion.choices[0].message.content;

    // Send response
    res.status(200).json({

      message: "Resume analyzed successfully",

      analysis

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

};