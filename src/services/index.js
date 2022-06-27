import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json"
  }
});

const getAll = () => {
  return http.get("/tutorials");
};

const getAllTeachers = () => {
  return http.get("/teachers");
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

const requestMethod = {
  getAll,
  getAllTeachers,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default requestMethod;
