import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://live-chat-api-nbq4.onrender.com/api" : "/api",
  withCredentials: true,
});
