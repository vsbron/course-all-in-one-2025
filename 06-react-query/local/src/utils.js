import axios from "axios";

// Create the axios instance with basic fetch settings
const axiosFetch = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

export default axiosFetch;
