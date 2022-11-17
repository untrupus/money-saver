import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://192.168.180.43:1337/api/",
});

export default axiosApi;
