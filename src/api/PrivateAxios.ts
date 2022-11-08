import axios from "axios";

let user = JSON.parse(localStorage.getItem("user") || "{}");

console.log(user.token);

const PrivateAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    
    headers: { Authorization: `Bearer ${user?.token}` },
   
});


export default PrivateAxiosInstance;
