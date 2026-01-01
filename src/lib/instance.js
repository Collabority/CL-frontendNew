import axios from "axios";

const instance = axios.create({
  baseURL: "https://cl-adminpanelbackend.onrender.com",
  withCredentials: true,
});

export default instance;
