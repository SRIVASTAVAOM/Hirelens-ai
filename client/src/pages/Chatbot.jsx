import { useState } from "react";

import axios from "axios";

import {
  useEffect,
  useRef
} from "react";

import {
  sendChatMessage
} from "../services/chatService";

const Chatbot = () => {

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const messagesEndRef =
    useRef(null);

  // Auto Scroll

  useEffect(() => {

    messagesEndRef.current
      ?.scrollIntoView({

        behavior: "smooth"

      });

  }, [messages]);

  // Clear Chats

  const clearChats =
    async () => {

      try {

        await axios.delete(

          "http://localhost:3000/api/chat"

        );

        setMessages([]);

      } catch (error) {

        console.log(error);

      }

    };

  // Send Message

  const sendMessage =
    async (customMessage) => {

      const finalMessage =
        customMessage || message;

      if (!finalMessage) return;

      const userMessage = {

        role: "user",

        content: finalMessage

      };

      setMessages((prev) => [

        ...prev,

        userMessage

      ]);

      setMessage("");

      try {

        setLoading(true);

        const response =
          await sendChatMessage(

            finalMessage

          );

        const aiMessage = {

          role: "assistant",

          content:
            response.data.reply

        };

        setMessages((prev) => [

          ...prev,

          aiMessage

        ]);

      } catch (error) {

        console.log(error);

        const errorMessage = {

          role: "assistant",

          content:
            "Something went wrong 😢"

        };

        setMessages((prev) => [

          ...prev,

          errorMessage

        ]);

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Header */}

      <div className="border-b border-white/10 p-8">

        <h1 className="text-5xl font-bold mb-4">

          AI Career Assistant 🚀

        </h1>

        <p className="text-gray-400 text-lg">

          Ask anything about resume,
          placements, interviews,
          coding roadmap, projects
          and career growth.

        </p>

        <button

          onClick={clearChats}

          className="mt-6 bg-red-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"

        >

          Clear Chats

        </button>

      </div>

      {/* Main Chat Area */}

      <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-140px)]">

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-8 space-y-6">

          {

            messages.length === 0 && (

              <div>

                <h2 className="text-4xl font-bold leading-tight mb-8">

                  How can I help you today? 🚀

                </h2>

                {/* Suggestion Cards */}

                <div className="grid md:grid-cols-2 gap-4">

                  <button

                    onClick={() =>
                      sendMessage(
                        "Create placement roadmap"
                      )
                    }

                    className="bg-white/5 border border-white/10 p-5 rounded-3xl hover:bg-white/10 transition text-left"

                  >

                    Create placement roadmap

                  </button>

                  <button

                    onClick={() =>
                      sendMessage(
                        "Improve my resume"
                      )
                    }

                    className="bg-white/5 border border-white/10 p-5 rounded-3xl hover:bg-white/10 transition text-left"

                  >

                    Improve my resume

                  </button>

                  <button

                    onClick={() =>
                      sendMessage(
                        "Give mock interview questions"
                      )
                    }

                    className="bg-white/5 border border-white/10 p-5 rounded-3xl hover:bg-white/10 transition text-left"

                  >

                    Mock interview questions

                  </button>

                  <button

                    onClick={() =>
                      sendMessage(
                        "Suggest best projects for resume"
                      )
                    }

                    className="bg-white/5 border border-white/10 p-5 rounded-3xl hover:bg-white/10 transition text-left"

                  >

                    Best projects for resume

                  </button>

                </div>

              </div>

            )

          }

          {/* Chat Messages */}

          {

            messages.map(

              (msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-2xl px-6 py-4 rounded-3xl ${
                      msg.role === "user"
                        ? "bg-white text-black"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >

                    {msg.content}

                  </div>

                </div>

              )

            )

          }

          {/* Loading */}

          {

            loading && (

              <div className="flex justify-start">

                <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-3xl">

                  AI is thinking... 🚀

                </div>

              </div>

            )

          }

          {/* Auto Scroll Ref */}

          <div ref={messagesEndRef}></div>

        </div>

        {/* Input Section */}

        <div className="p-6 border-t border-white/10">

          <div className="flex gap-4 bg-white/5 border border-white/10 rounded-3xl p-3">

            <input

              type="text"

              placeholder="Ask anything..."

              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }

              onKeyDown={(e) => {

                if (
                  e.key === "Enter"
                ) {

                  sendMessage();

                }

              }}

              className="flex-1 bg-transparent px-4 py-3 outline-none"

            />

            <button

              onClick={sendMessage}

              className="bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition"

            >

              Send

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Chatbot;