import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});

// http tutorial
const getAll = () => {
  return http.get("/tutorials");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

// Http teachers
const getAllTeachers = () => {
  return http.get("/teachers");
};

const removeAllTeachers = () => {
  return http.delete("/teachers");
};

const requestMethod = {
  getAll,
  getAllTeachers,
  removeAllTeachers,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default requestMethod;
