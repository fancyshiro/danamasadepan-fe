import axios from "axios";

const url = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  }
});