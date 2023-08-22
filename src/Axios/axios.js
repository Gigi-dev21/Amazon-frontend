import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-frontend-2f1bf.cloudfunctions.net/api",
});
export default instance;
