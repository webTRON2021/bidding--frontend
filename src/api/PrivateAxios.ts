import axios from "axios";

let user = JSON.parse(localStorage.getItem("user") || "{}");

const PrivateAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: { Authorization: `Bearer ${user?.token}` },
   
});


export default PrivateAxiosInstance;
