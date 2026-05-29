import axios from "axios";

const API = axios.create({

  baseURL: "http://import.meta.env.VITE_API_URL/api"

});

export const registerUser = (data) => {

  return API.post("/auth/register", data);

};

export const loginUser = (data) => {

  return API.post("/auth/login", data);

};