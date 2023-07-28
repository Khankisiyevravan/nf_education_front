import axios from "axios";
const BASE_URL = "https://nfeducationback-z9ad3.ondigitalocean.app/";
export default axios.create({
  baseURL: BASE_URL,
});
