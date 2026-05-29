import axios from "axios";

const API = axios.create({

  baseURL: "http://localhost:3000/api"

});

export const registerUser = (data) => {

  return API.post("/auth/register", data);

};

export const loginUser = (data) => {

  return API.post("/auth/login", data);

};