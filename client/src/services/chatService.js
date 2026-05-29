import axios from "axios";

export const sendChatMessage =
  async (message) => {

    return axios.post(

      "http://import.meta.env.VITE_API_URL/api/chat",

      {

        message

      }

    );

  };