import axios from "axios";

const API =
  import.meta.env.VITE_API_URL;

export const analyzeResume =
  async (file) => {

    const formData =
      new FormData();

    formData.append(
      "resume",
      file
    );

    return axios.post(

      `${API}/api/ai/parse-resume`,

      formData

    );

  };