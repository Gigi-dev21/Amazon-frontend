import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.REACT_APP_FIREBASE_API_KEY;
});
export default instance;
