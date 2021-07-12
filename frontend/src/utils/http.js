import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000/api" });

instance.interceptors.response.use(null, function (error) {
  return { error };
});

const http = {
  get: instance.get,
  post: instance.post,
};

export default http;
