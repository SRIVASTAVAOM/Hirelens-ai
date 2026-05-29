const groq =
require("../config/groq");

const prisma =
require("../config/prisma");

exports.chatWithAI =
  async (req, res) => {

    try {

      const { message } =
        req.body;

      if (!message) {

        return res.status(400).json({

          error:
            "Message is required"

        });

      }

      // Save User Message

      await prisma.chat.create({

        data: {

          role: "user",

          content: message

        }

      });

      // AI Response

      const completion =
        await groq.chat.completions.create({

          messages: [

            {

              role: "system",

              content:
                `
You are an AI Career Assistant.

Help students with:

- Resume improvement
- Placement preparation
- DSA roadmap
- Full stack roadmap
- Cloud roadmap
- Interview questions
- Career guidance
- Study schedules
- Productivity
- Projects
- Job preparation

Give practical and concise answers.
                `

            },

            {

              role: "user",

              content: message

            }

          ],

          model:
            "llama-3.1-8b-instant"

        });

      const reply =
        completion.choices[0]
        .message.content;

      // Save AI Message

      await prisma.chat.create({

        data: {

          role: "assistant",

          content: reply

        }

      });

      // Send Response

      res.status(200).json({

        reply

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        error: error.message

      });

    }

  };

  exports.deleteChats =
  async (req, res) => {

    try {

      await prisma.chat.deleteMany();

      res.status(200).json({

        message:
          "All chats deleted"

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        error: error.message

      });

    }

  };