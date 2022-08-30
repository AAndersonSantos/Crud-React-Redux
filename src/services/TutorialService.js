import http from "../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const create = data => {
  return http.post("/tutorials", data);
};


const TutorialService = {
  getAll,
  create
};

export default TutorialService;
