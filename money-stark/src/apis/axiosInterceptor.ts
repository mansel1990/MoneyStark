// src/api/axiosInstance.ts
import axios from "axios";

// Function to create an Axios instance
const createAuthenticatedAxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://192.168.0.183:8181", // Your API base URL
  });

  // Set default headers and add interceptors
  instance.interceptors.request.use(
    (config) => {
      // Retrieve user data from local storage
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        console.log(user);
        const email = user.email; // Extract email from parsed user data

        if (email) {
          // Add email to headers
          config.headers["X-User-Email"] = email; // Custom header for email ID
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export default createAuthenticatedAxiosInstance;
