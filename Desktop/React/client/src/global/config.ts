import axios from "axios";
//for office
export const url = "http://192.168.0.157:9191/";
//for house
//export const url = "http://192.168.16.101:9191/";
// export const baseUrl = "http://localhost:3000/api/"; // node/express
export const baseUrl = `${url}api/`; // spring boot
export const imageUrl = url;
export const axios_auth = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const axios_no_auth = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axios_file_with_auth = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
