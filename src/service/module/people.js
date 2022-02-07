import apiClient from "../http-common";

async function listPeople() {
  return await apiClient.get("/people");
}

async function getPeopleById(id) {
  return await apiClient.get("/people/" + id);
}

export { listPeople, getPeopleById };
