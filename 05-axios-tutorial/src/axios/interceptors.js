import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com/",
});

// Request interceptor
authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("Request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
authFetch.interceptors.response.use(
  (response) => {
    console.log("Got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
