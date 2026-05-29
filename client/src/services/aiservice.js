import axios from "axios";

export const analyzeResume =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "resume",
      file
    );

    return axios.post(

      `${import.meta.env.VITE_API_URL}/api/ai/analyze-resume`,

      formData

    );

  };