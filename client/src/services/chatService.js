import axios from "axios";

export const sendChatMessage =
  async (message) => {

    return axios.post(

      "http://localhost:3000/api/chat",

      {

        message

      }

    );

  };