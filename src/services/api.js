import axios from "axios";

const API = axios.create({
  baseURL: "fsadecommerce-backend-main-production.up.railway.app/api"
});

export default API;
