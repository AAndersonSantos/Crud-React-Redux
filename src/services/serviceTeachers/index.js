import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});

const getAllTeachers = () => {
  return http.get("/teachers");
};

const requestMethod = {
  getAllTeachers,
};

export default requestMethod;
