import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});

const getAllStudents = () => {
  return http.get("/students");
};

const createStudents = data => {
  return http.post("/students", data);
};

const requestMethod = {
    getAllStudents,
    createStudents
};

export default requestMethod;
