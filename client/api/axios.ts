import axios from "axios";

const IP_ADDRESS = process.env.EXPO_PUBLIC_IP_ADDRESS;

const api = axios.create({
  baseURL: `http://localhost:8000`,
});

export default api;
