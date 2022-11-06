// import axios from "axios";

// //get token from local storage
// const getToken = () => {
//   return JSON.parse(localStorage.getItem("user") || "{}")?.token;
// };

// export default axios
//   .create({
//     baseURL: process.env.REACT_APP_API_URL,
//     timeout: 5000,
//   })
//   .interceptors.request.use((config: any) => {
//     const auth = getToken() ? `${getToken()}` : "";
//     config.headers.common["Authorization"] = auth;
//     config.headers.common["Authorization"] = `Bearer ${getToken()}`;
//     return config;
//   });


import axios from "axios";

let user = JSON.parse(localStorage.getItem("user") || "{}");

const PrivateAxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    // headers: { Authorization: `Bearer ${user?.token}` },
    headers:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJQWkhBejhzd3poV2V4SEZYMTd4IiwiaW5mbyI6eyJfaWQiOiIyUFpIQXo4c3d6aFdleEhGWDE3eCIsImZpcnN0TmFtZSI6ImxheG1hbiAxMDEgMTAxIiwidXNlcklkIjoidGVzdGFkbWluIiwicm9sZXMiOiJbXCJBRE1JTlwiXSIsImFjY291bnRTdGF0dXMiOiJVTlZFUklGSUVEIiwiYWNjb3V0blN0YXR1c01lc3NhZ2UiOiIiLCJnZW5kZXIiOiJtYWxlIiwicmVjb3ZlcnlFbWFpbCI6IiIsImRvYiI6IjIwMDAvMTIvMDIiLCJsYXN0TmFtZSI6InBva2hyZWwifSwiaWF0IjoxNjY3NTc1NzU5LCJleHAiOjE2NjgwMDc3NTl9.Kn1RpAkwCSieSsslHImygHGS9RhWeQOf3iIzF9a3mdw`
    }
});


export default PrivateAxiosInstance;
