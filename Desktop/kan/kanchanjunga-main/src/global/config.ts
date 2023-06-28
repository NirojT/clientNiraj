import axios from "axios";

export const base_url = "http://localhost:5000/api";
export const axios_no_auth = axios.create({
  baseURL: base_url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axios_auth = axios.create({
  baseURL: base_url,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
export const axios_auth_form = axios.create({
  baseURL: base_url,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
