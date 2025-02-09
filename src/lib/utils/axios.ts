import axios from "axios";
import { getToken } from "./getToken";

const url = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});
