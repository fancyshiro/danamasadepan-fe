import axios from "axios";
import { getToken } from "./getToken";

const url = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});
