import apiClient from "../http-common";
export default {
  async listPeople(page = 1) {
    return await apiClient.get("/people/?page=" + page);
  },

  async getPeopleById(id) {
    return await apiClient.get("/people/" + id);
  },

  async searchPeople(searchInput) {
    return await apiClient.get("/people/?search=" + searchInput);
  },
};
