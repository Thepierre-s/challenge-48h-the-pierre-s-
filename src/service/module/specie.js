import apiClient from "../http-common";

export default {
  async listSpecie(page = 1) {
    return await apiClient.get("/species/?page=" + page);
  },

  async getSpecieById(id) {
    return await apiClient.get("/species/" + id);
  },

  async searchSpecie(searchInput) {
    return await apiClient.get("/species/?search=" + searchInput);
  },
};
