import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://medi-trust-server-side.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
