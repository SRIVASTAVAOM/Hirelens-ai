import axios from "axios";

const API = axios.create({

  baseURL: "http://localhost:3000/api"

});

export const analyzeResume =
  async (file) => {

    const formData =
      new FormData();

    formData.append("resume", file);

    const token =
      localStorage.getItem("token");

    return API.post(

      "/ai/parse-resume",

      formData,

      {

        headers: {

          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "multipart/form-data"

        }

      }

    );

};